import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CAREERS, J_AND_K_COLLEGES, ALL_INDIA_COLLEGES, EXAMS, SCHOLARSHIPS } from "@/data";
import { ChevronRight, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function Results() {
  const [, setLocation] = useLocation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem("cortexa_assessment");
    if (!raw) {
      setLocation("/assessment");
    } else {
      setData(JSON.parse(raw));
    }
  }, [setLocation]);

  if (!data) return <div className="p-8 text-center">Loading...</div>;

  // Logic Mapping for Careers
  const getRecommendedCareers = () => {
    const { stream, interests } = data;
    let recs: any[] = [];
    
    if (stream === "PCM" && interests.includes("Technology")) {
      recs = CAREERS.filter(c => ["Software Engineer", "Data Scientist", "Mechanical Engineer", "Civil Engineer", "UI/UX Designer"].includes(c.title));
    } else if (stream === "PCM" && interests.includes("Defence/Army")) {
      recs = CAREERS.filter(c => ["NDA Officer", "Mechanical Engineer", "Civil Engineer"].includes(c.title));
    } else if (stream === "PCB" && interests.includes("Medicine")) {
      recs = CAREERS.filter(c => ["Doctor (MBBS)", "Dentist", "Pharmacist", "Biotechnology Researcher"].includes(c.title));
    } else if (stream === "PCB" && (interests.includes("Environment") || interests.includes("Research"))) {
      recs = CAREERS.filter(c => ["Environmental Scientist", "Biotechnology Researcher"].includes(c.title));
    } else if (stream === "Commerce" && (interests.includes("Finance") || interests.includes("Business"))) {
      recs = CAREERS.filter(c => ["CA (Chartered Accountant)", "MBA Finance", "Banking Professional", "Entrepreneur"].includes(c.title));
    } else if (stream === "Arts" && interests.includes("Arts & Design")) {
      recs = CAREERS.filter(c => ["Graphic Designer", "UI/UX Designer"].includes(c.title));
    } else if (stream === "Arts" && interests.includes("Law")) {
      recs = CAREERS.filter(c => ["Lawyer", "UPSC/IAS Officer"].includes(c.title));
    } else {
      // Fallback
      recs = CAREERS.filter(c => c.stream === stream || c.stream === "Any" || c.stream.includes(stream)).slice(0, 5);
    }
    
    // Ensure we always have some careers
    if (recs.length === 0) recs = CAREERS.slice(0, 5);
    return recs.slice(0, 5);
  };

  // Logic Mapping for Colleges
  const getRecommendedColleges = () => {
    const percent = parseFloat(data.percentage) || 0;
    const stream = data.stream;
    
    // J&K filter
    const jkRecs = J_AND_K_COLLEGES.filter(c => 
      c.cutoff <= percent + 5 && 
      (c.streams.includes(stream) || c.streams.includes("Multiple streams") || c.streams.includes("Arts/Commerce/Science"))
    );

    // All India filter
    const aiRecs = ALL_INDIA_COLLEGES.filter(c => 
      c.cutoff <= percent + 5 && 
      (c.streams.includes(stream) || c.streams.includes("Multiple"))
    );

    // Prefer J&K colleges, fill remaining up to 6
    const combined = [...jkRecs, ...aiRecs];
    return combined.slice(0, 6);
  };

  // Logic for Exams
  const getRecommendedExams = () => {
    const stream = data.stream;
    const interests = data.interests;
    
    if (stream === "PCM") return EXAMS.filter(e => ["JEE Main", "JEE Advanced", "CUET", "NDA"].includes(e.name));
    if (stream === "PCB") return EXAMS.filter(e => ["NEET UG", "CUET"].includes(e.name));
    if (stream === "Commerce") return EXAMS.filter(e => ["CUET", "CA Foundation"].includes(e.name));
    
    // Arts
    let names = ["CUET"];
    if (interests.includes("Law")) names.push("CLAT");
    if (interests.includes("Defence/Army")) names.push("NDA");
    return EXAMS.filter(e => names.includes(e.name));
  };

  const careers = getRecommendedCareers();
  const colleges = getRecommendedColleges();
  const exams = getRecommendedExams();

  const getAptitudeMessage = () => {
    if (data.quizScore >= 8) return "Excellent! You have strong analytical and reasoning skills.";
    if (data.quizScore >= 5) return "Good performance! Your reasoning skills are solid.";
    return "Keep practicing! Aptitude skills improve with regular practice.";
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl space-y-12">
      
      {/* Header Profile */}
      <section className="bg-card rounded-2xl p-8 border border-border flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="h-24 w-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl font-bold border-2 border-primary/50 shrink-0">
          {data.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Hello, {data.name}!</h1>
          <p className="text-muted-foreground text-lg mb-4">Here is your personalized career guide based on your profile.</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <Badge variant="secondary" className="bg-secondary/50 text-sm py-1">Stream: {data.stream}</Badge>
            <Badge variant="secondary" className="bg-secondary/50 text-sm py-1">Marks: {data.percentage}%</Badge>
            <Badge variant="secondary" className="bg-secondary/50 text-sm py-1">Location: {data.district}, {data.state}</Badge>
            <Badge variant="outline" className="border-primary/50 text-primary text-sm py-1">Aptitude: {data.quizScore}/10</Badge>
          </div>
        </div>
      </section>

      {/* Section F: Roadmap (Moved up for actionability) */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center"><CheckCircle2 className="mr-2 text-primary" /> Your Action Plan</h2>
        <div className="bg-card rounded-xl border border-border p-6 md:p-8">
          <ol className="relative border-l border-primary/30 ml-3 space-y-6">
            {[
              `Register for ${exams[0]?.name || "CUET"} immediately.`,
              "Apply for PMSSS scholarship at AICTE portal (deadline August-September).",
              "Fill out college applications for J&K institutions (preference: government colleges first).",
              "Prepare documents: Domicile Certificate, Class 10 & 12 marksheets, Category certificate (if applicable), Income certificate.",
              "Join coaching classes or online platforms for exam preparation.",
              "Keep checking J&K CET notice board for state-level entrance updates."
            ].map((step, idx) => (
              <li key={idx} className="pl-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-4 ring-background text-primary-foreground text-xs font-bold">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-lg leading-tight mb-1">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section A: Careers */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold flex items-center"><Briefcase className="mr-2 text-primary" /> Recommended Careers</h2>
          <Button variant="link" asChild className="text-primary p-0"><Link href="/careers">View All Careers <ChevronRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-0">{c.exam}</Badge>
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 h-10 overflow-hidden line-clamp-2">{c.description}</p>
                  <div className="pt-4 border-t border-border/50 flex justify-between items-center text-sm">
                    <span className="font-semibold text-foreground">{c.expectedSalary}</span>
                    <span className="text-muted-foreground">{c.degree}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section B: Colleges */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold flex items-center"><GraduationCap className="mr-2 text-primary" /> Recommended Colleges</h2>
          <Button variant="link" asChild className="text-primary p-0"><Link href="/colleges">View All Colleges <ChevronRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {colleges.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card hover:border-primary/30 transition-colors flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{c.name}</CardTitle>
                    <Badge variant="outline" className={c.type === "Government" ? "border-blue-500 text-blue-500" : "border-orange-500 text-orange-500"}>{c.type}</Badge>
                  </div>
                  <CardDescription>{c.location}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-4 flex gap-4 text-sm border-t border-border/50">
                  <div><span className="text-muted-foreground">Cutoff:</span> <span className="font-medium text-foreground">{c.cutoff}%+</span></div>
                  <div><span className="text-muted-foreground">Streams:</span> <span className="font-medium text-foreground">{c.streams[0]}</span></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Section C: Exams */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center"><Award className="mr-2 text-primary" /> Entrance Exams</h2>
          <div className="space-y-4">
            {exams.map((e, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{e.name}</h3>
                    <Badge variant="secondary" className="bg-secondary text-xs">{e.month}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{e.fullForm} ({e.body})</p>
                  <div className="bg-background/50 p-3 rounded text-sm">
                    <strong>Prep Tip:</strong> {e.tips[0]}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section E: Aptitude Score Insight */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center"><Award className="mr-2 text-primary" /> Aptitude Analysis</h2>
          <Card className="bg-card overflow-hidden">
            <div className="bg-primary/10 p-6 flex items-center justify-between border-b border-primary/20">
              <div>
                <div className="text-sm font-medium text-primary mb-1">Score</div>
                <div className="text-4xl font-bold text-foreground">{data.quizScore}<span className="text-xl text-muted-foreground">/10</span></div>
              </div>
              <div className="h-16 w-16 rounded-full border-4 border-primary flex items-center justify-center">
                <span className="font-bold text-lg">{Math.round((data.quizScore / 10) * 100)}%</span>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-lg font-medium mb-4">{getAptitudeMessage()}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span>Logical Reasoning</span> <span className="text-muted-foreground">Assessed</span></div>
                <div className="flex justify-between text-sm"><span>Numerical Ability</span> <span className="text-muted-foreground">Assessed</span></div>
                <div className="flex justify-between text-sm"><span>Verbal Ability</span> <span className="text-muted-foreground">Assessed</span></div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  );
}
