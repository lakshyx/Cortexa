import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, BrainCircuit, BookOpenCheck, Landmark, Map as MapIcon, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    { title: "College Finder", description: "Discover the best J&K and All-India colleges based on your stream and percentage.", icon: Landmark },
    { title: "Career Guide", description: "Explore detailed career paths, salaries, and growth opportunities.", icon: Briefcase },
    { title: "Aptitude Quiz", description: "Test your skills to find the most suitable career for your personality.", icon: BrainCircuit },
    { title: "Entrance Exams", description: "Get the latest information on required exams, dates, and prep tips.", icon: BookOpenCheck },
    { title: "Scholarships", description: "Find scholarships specifically designed for J&K students, like PMSSS.", icon: GraduationCap },
    { title: "Roadmap", description: "Get a personalized step-by-step action plan for your future.", icon: MapIcon },
  ];

  const steps = [
    { num: "01", title: "Fill your profile", desc: "Enter your 12th stream, percentage, and district." },
    { num: "02", title: "Take aptitude quiz", desc: "Answer 10 logic and reasoning questions." },
    { num: "03", title: "Get recommendations", desc: "View personalized colleges, careers, and exams." },
    { num: "04", title: "Plan your future", desc: "Follow your custom roadmap to success." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Exclusively for J&K Students
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Confused After 12th? Let Cortexa Guide You!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Your trusted, personalized career guidance platform. Discover colleges, careers, scholarships, and your clear next steps—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-lg w-full sm:w-auto font-medium">
                <Link href="/assessment">Find Your Path Now <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg w-full sm:w-auto font-medium border-primary/20 hover:bg-primary/10">
                <Link href="/colleges">Browse Colleges</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive tools designed specifically for your educational journey from J&K to top institutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="h-full bg-background/50 border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A simple 4-step process to eliminate confusion and chart your course.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button asChild size="lg" className="h-14 px-10 text-lg">
              <Link href="/assessment">Start Your Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
