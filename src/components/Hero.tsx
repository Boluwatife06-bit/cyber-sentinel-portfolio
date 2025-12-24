import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Shield, Terminal, Code } from "lucide-react";
import FloatingElement from "./FloatingElement";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = ["Hi,", "I'm", "Ajayi", "Boluwatife"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-gradient-radial" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line" />
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <FloatingElement delay={0} duration={6} distance={20} className="absolute top-1/4 left-[15%] hidden lg:block">
        <div className="w-20 h-20 border border-primary/30 rounded-lg rotate-45 backdrop-blur-sm">
          <Shield className="w-8 h-8 text-primary/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={1} duration={5} distance={15} className="absolute top-1/3 right-[10%] hidden lg:block">
        <div className="w-16 h-16 border border-secondary/30 rounded-full backdrop-blur-sm flex items-center justify-center">
          <Terminal className="w-6 h-6 text-secondary/50" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={2} duration={7} distance={25} className="absolute bottom-1/3 left-[10%] hidden lg:block">
        <div className="w-14 h-14 border border-accent/30 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <Code className="w-5 h-5 text-accent/50" />
        </div>
      </FloatingElement>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Animated emoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-7xl mb-6 inline-block"
          >
            <span className="animate-float inline-block">👋</span>
          </motion.div>

          {/* Animated title with staggered words */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className={`inline-block mr-4 ${
                  index >= 2 ? "text-primary text-glow-intense" : "text-foreground"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto">
              <span className="text-secondary font-semibold text-glow">
                Offensive Security Pentester
              </span>
              <span className="mx-3 text-primary">|</span>
              <span className="text-foreground/80">
                Securing systems, testing vulnerabilities, and strengthening digital infrastructures
              </span>
            </p>
          </motion.div>

          {/* CTA Button with advanced hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="relative group px-10 py-5 text-lg font-bold overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient rounded-lg" />
              <div className="absolute inset-[2px] bg-background rounded-lg" />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3 text-primary group-hover:text-foreground transition-colors duration-300">
                View My Work
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.span>
              </span>
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.button>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {["Kali Linux", "Burp Suite", "Metasploit", "Python", "OWASP"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 text-sm font-mono bg-card/50 border border-border rounded-full backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
