import { motion } from "framer-motion";
import { Github, Mail, Phone, Heart, Shield } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Boluwatife06-bit", label: "GitHub" },
    { icon: Mail, href: "mailto:Tifegold378@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:08145242370", label: "Phone" },
  ];

  return (
    <footer className="relative py-12 overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">
              Ajayi Boluwatife
            </span>
          </motion.div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "GitHub" ? "_blank" : undefined}
                rel={social.label === "GitHub" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center flex items-center gap-2 flex-wrap justify-center"
          >
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Ajayi Boluwatife</span>. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.span>
            All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
