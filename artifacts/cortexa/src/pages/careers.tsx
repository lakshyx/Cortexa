import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CAREERS } from "@/data";
import { Search, TrendingUp, BookOpen, Banknote } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [streamFilter, setStreamFilter] = useState("All");

  const filteredCareers = CAREERS.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = streamFilter === "All" || c.stream.includes(streamFilter) || c.stream === "Any";
    
    return matchesSearch && matchesStream;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Career Library</h1>
        <p className="text-muted-foreground text-lg">
          Explore detailed career paths, requirements, and growth prospects.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-card p-4 rounded-lg border border-border/50">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search careers..." 
            className="pl-9 bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-64">
          <Select value={streamFilter} onValueChange={setStreamFilter}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Required Stream" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Streams</SelectItem>
              <SelectItem value="PCM">Science (PCM)</SelectItem>
              <SelectItem value="PCB">Science (PCB)</SelectItem>
              <SelectItem value="Commerce">Commerce</SelectItem>
              <SelectItem value="Arts">Arts/Humanities</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCareers.map((career, idx) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <Card className="h-full bg-card hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3 border-b border-border/50">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-0">
                    Stream: {career.stream}
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" /> {career.growth} Growth
                  </Badge>
                </div>
                <CardTitle className="text-xl">{career.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {career.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-background rounded-md p-3 border border-border/30">
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <Banknote className="h-3 w-3 mr-1" /> Expected Salary
                    </div>
                    <div className="font-semibold text-sm">{career.expectedSalary}</div>
                  </div>
                  <div className="bg-background rounded-md p-3 border border-border/30">
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <BookOpen className="h-3 w-3 mr-1" /> Required Degree
                    </div>
                    <div className="font-semibold text-sm">{career.degree}</div>
                  </div>
                  <div className="bg-background rounded-md p-3 border border-border/30">
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <Search className="h-3 w-3 mr-1" /> Key Exams
                    </div>
                    <div className="font-semibold text-sm">{career.exam}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {filteredCareers.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            No careers found matching your criteria. Try adjusting your search.
          </div>
        )}
      </div>
    </div>
  );
}
