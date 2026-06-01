import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "lucide-react";

const INDIAN_STATES = [
  "Jammu & Kashmir", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry", "Ladakh"
];

const INTERESTS = [
  "Technology", "Medicine", "Law", "Business", "Arts & Design", "Music", "Sports", 
  "Teaching", "Government Service", "Research", "Writing", "Environment", "Social Work", 
  "Defence/Army", "Architecture", "Finance"
];

const SKILLS = [
  "Problem Solving", "Communication", "Creativity", "Leadership", "Technical Skills", 
  "Helping Others", "Working with Numbers", "Drawing/Design", "Writing", "Public Speaking", 
  "Physical Fitness", "Research"
];

const QUIZ_QUESTIONS = [
  { q: "If A is faster than B, and B is faster than C, who is the slowest?", options: ["A", "B", "C", "Cannot determine"], answer: "C" },
  { q: "What comes next in the series: 2, 4, 8, 16, ___?", options: ["24", "32", "20", "28"], answer: "32" },
  { q: "A train travels 60 km in 1 hour. How far will it travel in 2.5 hours?", options: ["120 km", "150 km", "180 km", "90 km"], answer: "150 km" },
  { q: "Find the odd one out: Dog, Cat, Rose, Horse", options: ["Dog", "Cat", "Rose", "Horse"], answer: "Rose" },
  { q: "If all Roses are Flowers and some Flowers are Red, are all Roses Red?", options: ["Yes", "No", "Cannot say", "Maybe"], answer: "Cannot say" },
  { q: "A shopkeeper buys an item for Rs 80 and sells it for Rs 100. Profit %?", options: ["20%", "25%", "15%", "30%"], answer: "25%" },
  { q: "DOCTOR is to PATIENT as TEACHER is to?", options: ["School", "Student", "Book", "Class"], answer: "Student" },
  { q: "How many triangles are in a figure with 3 overlapping triangles?", options: ["3", "6", "7", "9"], answer: "7" },
  { q: "If it rained on Monday and every alternate day after, did it rain on Friday?", options: ["Yes", "No", "Cannot say", "Maybe"], answer: "Yes" },
  { q: "Choose the synonym for ENORMOUS:", options: ["Tiny", "Huge", "Average", "Hollow"], answer: "Huge" }
];

export default function Assessment() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: "",
    stream: "",
    percentage: "",
    state: "Jammu & Kashmir",
    district: "",
    interests: [] as string[],
    skills: [] as string[],
    personality: "",
    quizAnswers: Array(10).fill("")
  });

  const [currentQuizQ, setCurrentQuizQ] = useState(0);

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: "interests" | "skills", item: string) => {
    setFormData(prev => {
      const arr = prev[field];
      if (arr.includes(item)) {
        return { ...prev, [field]: arr.filter(i => i !== item) };
      } else {
        return { ...prev, [field]: [...arr, item] };
      }
    });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.stream || !formData.percentage || !formData.district) {
        alert("Please fill all fields.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.interests.length === 0) {
        alert("Please select at least one interest.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (formData.skills.length === 0 || !formData.personality) {
        alert("Please select at least one skill and your personality type.");
        return;
      }
      setStep(4);
    }
  };

  const handleQuizAnswer = (ans: string) => {
    const newAnswers = [...formData.quizAnswers];
    newAnswers[currentQuizQ] = ans;
    updateForm("quizAnswers", newAnswers);

    if (currentQuizQ < 9) {
      setCurrentQuizQ(prev => prev + 1);
    } else {
      // Quiz complete, finish assessment
      let score = 0;
      newAnswers.forEach((ans, idx) => {
        if (ans === QUIZ_QUESTIONS[idx].answer) score++;
      });
      
      const finalData = { ...formData, quizScore: score, completedAt: new Date().toISOString() };
      localStorage.setItem("cortexa_assessment", JSON.stringify(finalData));
      setLocation("/results");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Career Assessment</h1>
        <p className="text-muted-foreground text-lg">
          Let's find the best path for you. Answer honestly to get the most accurate recommendations.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2 font-medium">
          <span>Step {step} of 4</span>
          <span>{Math.round((step / 4) * 100)}%</span>
        </div>
        <Progress value={(step / 4) * 100} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Tell us a bit about yourself and your academic background.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={formData.name} onChange={e => updateForm("name", e.target.value)} placeholder="Enter your full name" />
                </div>
                
                <div className="space-y-2">
                  <Label>12th Stream</Label>
                  <RadioGroup value={formData.stream} onValueChange={v => updateForm("stream", v)} className="grid grid-cols-2 gap-4">
                    {["PCM", "PCB", "Commerce", "Arts"].map(s => (
                      <div key={s} className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer transition-colors ${formData.stream === s ? 'border-primary bg-primary/10' : 'border-border'}`} onClick={() => updateForm("stream", s)}>
                        <RadioGroupItem value={s} id={s} />
                        <Label htmlFor={s} className="cursor-pointer">{s}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="percent">12th Percentage (Expected or Actual)</Label>
                  <Input id="percent" type="number" min="0" max="100" value={formData.percentage} onChange={e => updateForm("percentage", e.target.value)} placeholder="e.g. 85" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>State/UT</Label>
                    <Select value={formData.state} onValueChange={v => updateForm("state", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDIAN_STATES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Input id="district" value={formData.district} onChange={e => updateForm("district", e.target.value)} placeholder="e.g. Srinagar" />
                  </div>
                </div>

                <Button className="w-full mt-4" onClick={handleNext}>Next Step</Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Your Interests</CardTitle>
                <CardDescription>Select the fields that naturally draw your attention (at least one).</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {INTERESTS.map(interest => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <div 
                        key={interest}
                        onClick={() => toggleArrayItem("interests", interest)}
                        className={`p-4 rounded-lg border text-center cursor-pointer transition-all ${
                          isSelected ? 'bg-primary border-primary text-primary-foreground' : 'bg-background hover:border-primary/50'
                        }`}
                      >
                        <span className="text-sm font-medium">{interest}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-4 mt-8">
                  <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                  <Button className="flex-1" onClick={handleNext}>Next Step</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Skills & Personality</CardTitle>
                <CardDescription>What are you good at, and how do you interact with the world?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-base">Top Skills</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SKILLS.map(skill => (
                      <div key={skill} className="flex items-center space-x-2 border rounded-md p-3">
                        <Checkbox 
                          id={`skill-${skill}`} 
                          checked={formData.skills.includes(skill)} 
                          onCheckedChange={() => toggleArrayItem("skills", skill)}
                        />
                        <Label htmlFor={`skill-${skill}`} className="cursor-pointer text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base">Personality Type</Label>
                  <RadioGroup value={formData.personality} onValueChange={v => updateForm("personality", v)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Introvert", "Extrovert", "Ambivert"].map(p => (
                      <div key={p} className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer transition-colors ${formData.personality === p ? 'border-primary bg-primary/10' : 'border-border'}`} onClick={() => updateForm("personality", p)}>
                        <RadioGroupItem value={p} id={p} />
                        <div className="space-y-1">
                          <Label htmlFor={p} className="cursor-pointer font-bold">{p}</Label>
                          <p className="text-xs text-muted-foreground">
                            {p === 'Introvert' && 'Gains energy from alone time'}
                            {p === 'Extrovert' && 'Gains energy from socializing'}
                            {p === 'Ambivert' && 'Balance of both'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>Back</Button>
                  <Button className="flex-1" onClick={handleNext}>Next Step (Quiz)</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Card className="bg-card">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary">Question {currentQuizQ + 1} of 10</Badge>
                </div>
                <CardTitle className="text-xl leading-relaxed">{QUIZ_QUESTIONS[currentQuizQ].q}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {QUIZ_QUESTIONS[currentQuizQ].options.map((opt, idx) => (
                    <Button 
                      key={idx} 
                      variant="outline" 
                      className="h-auto py-4 text-left justify-start text-base border-border hover:border-primary hover:bg-primary/5 whitespace-normal"
                      onClick={() => handleQuizAnswer(opt)}
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
