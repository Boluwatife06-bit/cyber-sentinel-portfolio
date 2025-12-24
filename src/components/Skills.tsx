import { motion } from "framer-motion";
import { Settings, Monitor, Network, Key, Globe, Bomb, TrendingUp, Lock, Code, BookOpen, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GlowCard from "./GlowCard";
import AnimatedSkillBar from "./AnimatedSkillBar";

const skillCategories = [
  {
    title: "Operating Systems & Environments",
    icon: Monitor,
    color: "primary",
    skills: ["Linux (Ubuntu Server)", "Kali Linux", "Parrot OS", "Windows Server", "VirtualBox", "VMware"]
  },
  {
    title: "Networking & Scanning Tools",
    icon: Network,
    color: "secondary",
    skills: ["Nmap", "Netcat", "Masscan", "Wireshark", "Tcpdump", "Hping3"]
  },
  {
    title: "Password & Authentication Tools",
    icon: Key,
    color: "accent",
    skills: ["Hydra", "Medusa", "John the Ripper", "Hashcat", "CeWL", "Crunch"]
  },
  {
    title: "Web Application Pentesting Tools",
    icon: Globe,
    color: "primary",
    skills: ["Burp Suite", "OWASP ZAP", "Nikto", "Gobuster", "Dirsearch", "Wfuzz", "SQLmap", "Postman"]
  },
  {
    title: "Exploitation & Frameworks",
    icon: Bomb,
    color: "secondary",
    skills: ["Metasploit", "Searchsploit", "Exploit-DB", "Social Engineering Toolkit (SET)", "Xerosploit"]
  },
  {
    title: "Privilege Escalation & Enumeration",
    icon: TrendingUp,
    color: "accent",
    skills: ["LinPEAS", "WinPEAS", "BloodHound", "SharpHound", "Linux Enum Scripts"]
  },
  {
    title: "SSH & Server Security",
    icon: Lock,
    color: "primary",
    skills: ["SSH Hardening", "Fail2Ban", "UFW", "IPTables", "Cloudflare Tunnel"]
  },
  {
    title: "Scripting & Automation",
    icon: Code,
    color: "secondary",
    skills: ["Bash", "Python", "PowerShell"]
  },
  {
    title: "Web Security Standards & Knowledge",
    icon: BookOpen,
    color: "accent",
    skills: ["OWASP Top 10", "MITRE ATT&CK", "Threat Modeling", "Vulnerability Assessment"]
  },
  {
    title: "Other Skills",
    icon: FileText,
    color: "primary",
    skills: ["Reporting & Documentation", "Reconnaissance", "Log Analysis", "Security Recommendations"]
  }
];

const proficiencyLevels = [
  { skill: "Penetration Testing", percentage: 90 },
  { skill: "Linux Administration", percentage: 85 },
  { skill: "Network Security", percentage: 88 },
  { skill: "Web App Security", percentage: 92 },
  { skill: "Python Scripting", percentage: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            My Skills & Tools
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Settings className="w-10 h-10 text-primary" />
            </motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for offensive security and penetration testing
          </p>
        </motion.div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Proficiencies</h3>
          <div className="space-y-6">
            {proficiencyLevels.map((item, index) => (
              <AnimatedSkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                delay={index * 0.15}
              />
            ))}
          </div>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <GlowCard key={category.title} delay={index * 0.05} glowColor={category.color}>
              <div className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center border border-${category.color}/30`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + skillIndex * 0.03 }}
                    >
                      <Badge
                        variant="outline"
                        className="border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
