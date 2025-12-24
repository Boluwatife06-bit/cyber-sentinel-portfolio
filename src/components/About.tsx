import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, Bug, Award } from "lucide-react";
import avatarImage from "@/assets/avatar-cyber.jpg";
import GlowCard from "./GlowCard";

const highlights = [
  { icon: Server, label: "Ubuntu Servers", value: "Built & Secured" },
  { icon: Bug, label: "Vulnerabilities", value: "Discovered & Fixed" },
  { icon: Award, label: "Projects", value: "Delivered" },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image container with 3D effect */}
            <div className="relative perspective-1000">
              <motion.div 
                className="relative"
                style={{ y }}
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* Glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl opacity-60" />
                
                {/* Image frame */}
                <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <img
                    src={avatarImage}
                    alt="Ajayi Boluwatife - Security Expert"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="w-full h-[2px] bg-primary/30 animate-scan-line" />
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-4 -right-4 px-6 py-3 glass rounded-full border border-primary/50 shadow-lg"
                >
                  <span className="text-sm font-bold text-primary">🛡️ Security Expert</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3"
            >
              About Me
              <Shield className="w-10 h-10 text-primary animate-pulse-glow" />
            </motion.h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I am an <span className="text-primary font-semibold">Offensive Security Pentester</span> who enjoys 
                <span className="text-secondary font-semibold"> uncovering vulnerabilities</span> and strengthening systems through hands-on security work.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I've built and secured <span className="text-accent font-semibold">Ubuntu servers</span>, developed 
                and tested an SSH brute-force project to understand attack patterns and improve server security, and 
                <span className="text-secondary font-semibold"> collaborated with web developers</span> on practical penetration testing projects.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                My focus is on building <span className="text-primary font-semibold">resilient systems</span> while continually expanding my skills in the rapidly 
                evolving world of cybersecurity.
              </motion.p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {highlights.map((item, index) => (
                <GlowCard key={item.label} delay={0.4 + index * 0.1}>
                  <div className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-foreground">{item.value}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
