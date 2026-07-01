"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailState = {
  status: "idle" | "success" | "error";
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function sendEmail(
  prevState: SendEmailState,
  formData: FormData
): Promise<SendEmailState> {
  // --- Anti-spam: honeypot check ---
  const honeypot = formData.get("_honeypot") as string;
  if (honeypot && honeypot.trim() !== "") {
    // Bot detected — silently succeed to avoid tipping them off
    return { status: "success", message: "Your message has been sent successfully!" };
  }

  // --- Extract fields ---
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // --- Server-side validation ---
  if (!name || !email || !subject || !message) {
    return { status: "error", message: "All fields are required." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Please provide a valid email address." };
  }

  if (message.length < 10) {
    return { status: "error", message: "Your message is too short. Please provide more detail." };
  }

  const toEmail = process.env.RESEND_TO_EMAIL ?? "kibromgidey017@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  // --- Sanitize for HTML output ---
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject);
  const safeMessage = sanitize(message).replace(/\n/g, "<br />");

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Contact</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                New Portfolio Message
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
                Someone reached out via your contact form
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#6366f1;">From</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#18181b;">${safeName}</p>
                    <a href="mailto:${safeEmail}" style="font-size:14px;color:#6366f1;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#6366f1;">Subject</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#18181b;">${safeSubject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 0;">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#6366f1;">Message</p>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#3f3f46;">${safeMessage}</p>
                  </td>
                </tr>
              </table>
              <!-- Reply CTA -->
              <div style="margin-top:32px;text-align:center;">
                <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(subject)}"
                   style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600;">
                  Reply to ${safeName}
                </a>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f4f4f5;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">
                This email was sent from your portfolio contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const textBody = `
New Portfolio Contact

From: ${name} <${email}>
Subject: ${subject}

Message:
${message}

---
Reply to this person at: ${email}
  `.trim();

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      html: htmlBody,
      text: textBody,
    });

    if (error) {
      console.error("[sendEmail] Resend error:", error);
      return {
        status: "error",
        message: "Failed to send your message. Please try again or email me directly.",
      };
    }

    return { status: "success", message: "Your message has been sent successfully!" };
  } catch (err) {
    console.error("[sendEmail] Unexpected error:", err);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
