import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

const GlowCard = ({ children, className = "", glowColor = "primary", delay = 0 }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect that follows mouse */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--${glowColor}) / 0.15), transparent 40%)`,
        }}
      />
      
      {/* Border glow */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Card content */}
      <motion.div
        className="relative bg-card border border-border rounded-xl overflow-hidden h-full"
        whileHover={{ 
          scale: 1.02,
          rotateX: isHovered ? (mousePosition.y - 150) / 30 : 0,
          rotateY: isHovered ? -(mousePosition.x - 150) / 30 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GlowCard;
