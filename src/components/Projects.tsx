import { motion } from "framer-motion";
import { Server, Key, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Ubuntu Server Build & Security",
    icon: Server,
    description: "Built and secured an Ubuntu server from the ground up, applying best practices in system hardening, user access control, and performance optimization. Implemented firewall rules, SSH hardening, and Fail2Ban for brute-force protection. Strengthened practical expertise in Linux administration and real-world cybersecurity defenses.",
    tools: ["Ubuntu Server", "UFW", "SSH", "Fail2Ban", "Cloudflare Tunnel"],
    color: "primary"
  },
  {
    title: "SSH Brute Force Simulation",
    icon: Key,
    description: "Simulated SSH brute-force attacks using Hydra and msfconsole on an Ubuntu server to test password strength, logging, and intrusion detection. Implemented countermeasures and documented results to improve server security.",
    tools: ["Hydra", "msfconsole", "Ubuntu Server", "Fail2Ban"],
    color: "secondary"
  },
  {
    title: "Web Application Penetration Testing Collaboration",
    icon: Shield,
    description: "Collaborated with a web developer to perform a full-scale penetration test on a live web application. Conducted reconnaissance, vulnerability scanning, directory enumeration, and manual exploitation using Burp Suite, Nmap, OWASP ZAP, Gobuster, and Nikto. Identified open directories exposing the database, clickjacking vulnerabilities, and other potential threats. Documented all findings and worked with the developer on remediation.",
    tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Nikto", "Gobuster"],
    color: "accent"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projects 💻
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow">
                  <CardHeader>
                    <div className={`mb-4 w-16 h-16 rounded-lg bg-${project.color}/10 flex items-center justify-center border-2 border-${project.color}/30 group-hover:border-${project.color} transition-all duration-300`}>
                      <project.icon className={`h-8 w-8 text-${project.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold mb-2 text-foreground">Tools Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <Badge
                              key={tool}
                              variant="outline"
                              className="border-primary/40 text-xs"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
