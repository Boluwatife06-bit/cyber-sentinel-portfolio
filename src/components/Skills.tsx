import { motion } from "framer-motion";
import { Settings, Monitor, Network, Key, Globe, Bomb, TrendingUp, Lock, Code, BookOpen, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Operating Systems & Environments",
    icon: Monitor,
    color: "text-primary",
    skills: ["Linux (Ubuntu Server)", "Kali Linux", "Parrot OS", "Windows Server", "VirtualBox", "VMware"]
  },
  {
    title: "Networking & Scanning Tools",
    icon: Network,
    color: "text-secondary",
    skills: ["Nmap", "Netcat", "Masscan", "Wireshark", "Tcpdump", "Hping3"]
  },
  {
    title: "Password & Authentication Tools",
    icon: Key,
    color: "text-accent",
    skills: ["Hydra", "Medusa", "John the Ripper", "Hashcat", "CeWL", "Crunch"]
  },
  {
    title: "Web Application Pentesting Tools",
    icon: Globe,
    color: "text-primary",
    skills: ["Burp Suite", "OWASP ZAP", "Nikto", "Gobuster", "Dirsearch", "Wfuzz", "SQLmap", "Postman"]
  },
  {
    title: "Exploitation & Frameworks",
    icon: Bomb,
    color: "text-secondary",
    skills: ["Metasploit", "Searchsploit", "Exploit-DB", "Social Engineering Toolkit (SET)", "Xerosploit"]
  },
  {
    title: "Privilege Escalation & Enumeration",
    icon: TrendingUp,
    color: "text-accent",
    skills: ["LinPEAS", "WinPEAS", "BloodHound", "SharpHound", "Linux Enum Scripts"]
  },
  {
    title: "SSH & Server Security",
    icon: Lock,
    color: "text-primary",
    skills: ["SSH Hardening", "Fail2Ban", "UFW", "IPTables", "Cloudflare Tunnel"]
  },
  {
    title: "Scripting & Automation",
    icon: Code,
    color: "text-secondary",
    skills: ["Bash", "Python", "PowerShell"]
  },
  {
    title: "Web Security Standards & Knowledge",
    icon: BookOpen,
    color: "text-accent",
    skills: ["OWASP Top 10", "MITRE ATT&CK", "Threat Modeling", "Vulnerability Assessment"]
  },
  {
    title: "Other Skills",
    icon: FileText,
    color: "text-primary",
    skills: ["Reporting & Documentation", "Reconnaissance", "Log Analysis", "Security Recommendations"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My Skills & Tools <Settings className="inline-block ml-2 h-10 w-10 text-primary animate-spin-slow" style={{ animation: 'spin 3s linear infinite' }} />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
