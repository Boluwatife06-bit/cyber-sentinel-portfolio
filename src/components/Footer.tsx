import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-darker border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © 2025 <span className="text-primary font-semibold">Ajayi Boluwatife</span>. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="mailto:Tifegold378@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Boluwatife06-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="tel:08145242370"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
