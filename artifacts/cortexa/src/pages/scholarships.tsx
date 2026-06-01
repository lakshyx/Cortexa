import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SCHOLARSHIPS } from "@/data";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Calendar, Banknote, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Scholarships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredScholarships = SCHOLARSHIPS.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || s.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...Array.from(new Set(SCHOLARSHIPS.map(s => s.category)))];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Scholarships for J&K Students</h1>
        <p className="text-muted-foreground text-lg">
          Discover financial aid opportunities, schemes, and merit-based scholarships.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-card p-4 rounded-lg border border-border/50">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search scholarships..." 
            className="pl-9 bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(c => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScholarships.map((scholarship, idx) => (
          <motion.div
            key={scholarship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <Card className="h-full flex flex-col bg-card hover:border-primary/30 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {scholarship.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50">
                    {scholarship.stream}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{scholarship.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1 text-sm">
                  {scholarship.summary}
                </p>
                
                <div className="space-y-3 mb-6 bg-background/50 p-4 rounded-md border border-border/30">
                  <div className="flex items-center text-sm">
                    <Banknote className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span><strong className="text-foreground">Amount:</strong> {scholarship.amount}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span><strong className="text-foreground">Apply at:</strong> {scholarship.apply}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span><strong className="text-foreground">Deadline:</strong> {scholarship.deadline}</span>
                  </div>
                </div>

                <Button variant="default" className="w-full group" onClick={() => window.alert("This is a placeholder for the actual scholarship portal link.")}>
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {filteredScholarships.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            No scholarships found matching your criteria. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  );
}
