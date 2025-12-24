import { motion } from "framer-motion";
import { Server, Key, Shield, ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GlowCard from "./GlowCard";

const projects = [
  {
    title: "Ubuntu Server Build & Security",
    icon: Server,
    description: "Built and secured an Ubuntu server from the ground up, applying best practices in system hardening, user access control, and performance optimization. Implemented firewall rules, SSH hardening, and Fail2Ban for brute-force protection.",
    tools: ["Ubuntu Server", "UFW", "SSH", "Fail2Ban", "Cloudflare Tunnel"],
    color: "primary",
    highlights: ["System Hardening", "Firewall Config", "Brute-force Protection"]
  },
  {
    title: "SSH Brute Force Simulation",
    icon: Key,
    description: "Simulated SSH brute-force attacks using Hydra and msfconsole on an Ubuntu server to test password strength, logging, and intrusion detection. Implemented countermeasures and documented results.",
    tools: ["Hydra", "msfconsole", "Ubuntu Server", "Fail2Ban"],
    color: "secondary",
    highlights: ["Attack Simulation", "Intrusion Detection", "Security Hardening"]
  },
  {
    title: "Web Application Penetration Testing",
    icon: Shield,
    description: "Collaborated with a web developer to perform a full-scale penetration test on a live web application. Identified open directories, clickjacking vulnerabilities, and other potential threats.",
    tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Nikto", "Gobuster"],
    color: "accent",
    highlights: ["Full Pentest", "Vulnerability Discovery", "Remediation Support"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects 💻
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world security projects demonstrating offensive and defensive capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <GlowCard key={project.title} delay={index * 0.15} glowColor={project.color}>
              <div className="p-6 h-full flex flex-col">
                {/* Icon header */}
                <motion.div 
                  className="relative w-16 h-16 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className={`w-full h-full rounded-xl bg-${project.color}/10 border-2 border-${project.color}/30 flex items-center justify-center`}>
                    <project.icon className={`h-8 w-8 text-${project.color}`} />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-xl bg-${project.color}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className={`text-xs px-2 py-1 rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/30`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="mt-auto">
                  <p className="text-xs font-semibold mb-2 text-foreground flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary" />
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="text-xs border-border hover:border-primary/50 transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </motion.button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
