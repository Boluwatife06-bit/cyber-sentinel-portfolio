import { motion } from "framer-motion";
import { Mail, Github, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Tifegold378@gmail.com",
      href: "mailto:Tifegold378@gmail.com",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Boluwatife06-bit",
      href: "https://github.com/Boluwatife06-bit",
      color: "text-secondary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "08145242370",
      href: "tel:08145242370",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch ✉️
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
              >
                <contact.icon className={`h-10 w-10 ${contact.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                <p className="font-semibold">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg border-2 border-primary shadow-glow hover:shadow-[0_0_40px_hsl(var(--cyber-glow)/0.5)] transition-all duration-300"
            >
              <a href="mailto:Tifegold378@gmail.com">
                Contact Me
                <Send className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
