import { motion } from "framer-motion";
import { Mail, Github, Phone, Send, Sparkles } from "lucide-react";
import GlowCard from "./GlowCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Tifegold378@gmail.com",
      href: "mailto:Tifegold378@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Boluwatife06-bit",
      href: "https://github.com/Boluwatife06-bit",
      color: "secondary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "08145242370",
      href: "tel:08145242370",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto">
              <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch ✉️
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm open to <span className="text-primary font-semibold">freelance penetration testing projects</span>, 
            internships, and collaborative cybersecurity work. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "GitHub" ? "_blank" : undefined}
                rel={contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GlowCard glowColor={contact.color}>
                  <div className="p-6 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-${contact.color}/10 border border-${contact.color}/30 flex items-center justify-center`}>
                      <contact.icon className={`w-7 h-7 text-${contact.color}`} />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="font-semibold text-foreground hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </GlowCard>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a
              href="mailto:Tifegold378@gmail.com"
              className="relative inline-flex group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-10 py-5 rounded-xl overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient" />
                
                <span className="relative z-10 flex items-center gap-3 text-lg font-bold text-primary-foreground">
                  Contact Me
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.span>
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
