import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Code, Database, FileText, Shield, Star } from "lucide-react";

export default function About() {
  const team = [
    { name: "Lakshya Chakravarti", role: "Project Lead", icon: Star, initials: "LC" },
    { name: "Aditya Sahu", role: "Requirement Gathering & Documentation Specialist", icon: FileText, initials: "AS" },
    { name: "Ishank Kori", role: "Requirement Gathering, Documentation & Quality Assurance", icon: Shield, initials: "IK" },
    { name: "Haardik Ukey", role: "Frontend Development", icon: Code, initials: "HU" },
    { name: "Devyansh Singh Baghel", role: "Backend Development", icon: Code, initials: "DB" },
    { name: "Ashi Singh", role: "Database Administrator", icon: Database, initials: "Ai" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Cortexa</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One Stop Personalized Career and Education Advisor for J&K Students.
          </p>
        </div>

        <Card className="bg-card border-border/50 mb-16 overflow-hidden">
          <div className="h-2 bg-primary w-full"></div>
          <CardContent className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Many students in Jammu & Kashmir face challenges navigating higher education choices after 12th grade. They often lack personalized guidance on colleges, careers, scholarships, and entrance exams tailored to their specific situation, streams, and regional opportunities like PMSSS.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cortexa is a comprehensive, government-aware platform designed to act as a digital counsellor. By assessing a student's stream, marks, interests, and logical aptitude, it curates a personalized roadmap featuring top J&K institutions alongside premier national colleges, actionable career paths, and vital scholarship links.
            </p>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              >
                <Card className="h-full bg-background border-border/50 hover:border-primary/30 transition-all group text-center py-6">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Avatar className="h-20 w-20 mb-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <AvatarFallback className="bg-secondary text-primary text-xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center">
                      <member.icon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center bg-secondary/30 rounded-2xl p-8 border border-border/50">
          <h2 className="text-2xl font-bold mb-4">Institution & Mentorship</h2>
          <p className="text-lg text-muted-foreground mb-2">
            Gyan Ganga Institute of Technology & Sciences Jabalpur
          </p>
          <p className="text-muted-foreground">
            Faculty Guide: <strong className="text-foreground">Prof. Preeti Rai</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
