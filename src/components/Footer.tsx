import { FaFacebook, FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-card text-slate-200 dark:text-foreground py-6 border-t border-border/10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {/* <a href="#" className="w-8 h-8 rounded-full bg-white/10 dark:bg-foreground/10 flex items-center justify-center text-white dark:text-foreground hover:bg-primary hover:text-white transition-colors">
            <FaTwitter size={16} />
          </a> */}
          <a href="https://www.facebook.com/kibrom.gidey.961" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 dark:bg-foreground/10 flex items-center justify-center text-white dark:text-foreground hover:bg-primary hover:text-white transition-colors">
            <FaFacebook size={16} />
          </a>
          {/* <a href="#" className="w-8 h-8 rounded-full bg-white/10 dark:bg-foreground/10 flex items-center justify-center text-white dark:text-foreground hover:bg-primary hover:text-white transition-colors">
            <FaInstagram size={16} />
          </a> */}
          <a href="https://www.linkedin.com/in/kibrom-gidey-19a27a356/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 dark:bg-foreground/10 flex items-center justify-center text-white dark:text-foreground hover:bg-primary hover:text-white transition-colors">
            <FaLinkedin size={16} />
          </a>
          <a href="https://github.com/Yeenatu16" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 dark:bg-foreground/10 flex items-center justify-center text-white dark:text-foreground hover:bg-primary hover:text-white transition-colors">
            <FaGithub size={16} />
          </a>
          <a href="https://t.me/Yeenatu16" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 dark:bg-foreground/10 flex items-center justify-center text-white dark:text-foreground hover:bg-primary hover:text-white transition-colors">
            <FaTelegramPlane size={16} />
          </a>
        </div>
        <p className="text-slate-400 dark:text-muted text-sm text-center">
          © {new Date().getFullYear()} Kibrom. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
