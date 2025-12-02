import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const AnimatedSkillBar = ({ skill, percentage, color = "primary", delay = 0 }: AnimatedSkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <motion.span
          className="text-sm font-mono text-primary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r from-${color} to-secondary relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ delay, duration: 1, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, hsl(var(--${color})), hsl(var(--secondary)))`,
          }}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 blur-sm"
            style={{
              background: `linear-gradient(90deg, hsl(var(--${color}) / 0.5), hsl(var(--secondary) / 0.5))`,
            }}
          />
          {/* Animated shine */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "100%" } : {}}
            transition={{ delay: delay + 0.8, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
