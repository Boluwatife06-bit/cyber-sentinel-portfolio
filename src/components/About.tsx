import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import avatarImage from "@/assets/avatar-cyber.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me <Shield className="inline-block ml-2 h-10 w-10 text-primary" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              <p>
                I am an <span className="text-primary font-semibold">Offensive Security Pentester</span> who 
                enjoys uncovering vulnerabilities and strengthening systems through hands-on security work.
              </p>
              <p>
                I've built and secured Ubuntu servers, developed and tested an SSH brute-force project to 
                understand attack patterns and improve server security, and collaborated with web developers 
                on practical penetration testing projects.
              </p>
              <p>
                My focus is on building <span className="text-secondary font-semibold">resilient systems</span> while 
                continually expanding my skills in the rapidly evolving world of cybersecurity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-glow">
                <img
                  src={avatarImage}
                  alt="Cybersecurity Professional"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/80 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary rounded-lg opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent rounded-lg opacity-50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
