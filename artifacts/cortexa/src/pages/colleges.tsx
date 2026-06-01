import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { J_AND_K_COLLEGES, ALL_INDIA_COLLEGES } from "@/data";
import { Search, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Colleges() {
  const allColleges = [...J_AND_K_COLLEGES, ...ALL_INDIA_COLLEGES];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [streamFilter, setStreamFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("J&K Only");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredColleges = allColleges.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = streamFilter === "All" || c.streams.includes(streamFilter) || c.streams.includes("Multiple") || c.streams.includes("Multiple streams");
    
    let matchesLocation = true;
    if (locationFilter === "J&K Only") {
      matchesLocation = c.location.includes("J&K");
    } else if (locationFilter === "All India") {
      matchesLocation = !c.location.includes("J&K");
    }

    const matchesType = typeFilter === "All" || c.type === typeFilter;

    return matchesSearch && matchesStream && matchesLocation && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Colleges Directory</h1>
        <p className="text-muted-foreground text-lg">
          Browse top institutions in Jammu & Kashmir and across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-card p-4 rounded-lg border border-border/50">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search college name..." 
            className="pl-9 bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Select value={streamFilter} onValueChange={setStreamFilter}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Stream" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Streams</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
            <SelectItem value="Medical">Medical</SelectItem>
            <SelectItem value="Commerce">Commerce</SelectItem>
            <SelectItem value="Arts">Arts</SelectItem>
          </SelectContent>
        </Select>

        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Everywhere</SelectItem>
            <SelectItem value="J&K Only">J&K Only</SelectItem>
            <SelectItem value="All India">Outside J&K</SelectItem>
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Types</SelectItem>
            <SelectItem value="Government">Government</SelectItem>
            <SelectItem value="Private">Private</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college, idx) => (
          <motion.div
            key={college.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <Card className="h-full flex flex-col bg-card hover:border-primary/30 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={college.type === "Government" ? "border-blue-500 text-blue-500" : "border-orange-500 text-orange-500"}>
                    {college.type}
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50 font-mono">
                    Cutoff: {college.cutoff}%+
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{college.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <MapPin className="h-3 w-3 mr-1" /> {college.location}
                </div>
              </CardHeader>
              <CardContent className="mt-auto border-t border-border/50 pt-4 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1">
                  {college.streams.slice(0, 3).map(s => (
                    <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
                  ))}
                  {college.streams.length > 3 && <Badge variant="outline" className="text-xs">+{college.streams.length - 3}</Badge>}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="w-full">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{college.name}</DialogTitle>
                      <DialogDescription className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 mr-1" /> {college.location}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary/30 p-3 rounded-lg border border-border/50">
                          <div className="text-xs text-muted-foreground mb-1">Institution Type</div>
                          <div className="font-semibold text-foreground">{college.type}</div>
                        </div>
                        <div className="bg-secondary/30 p-3 rounded-lg border border-border/50">
                          <div className="text-xs text-muted-foreground mb-1">Min. Cutoff</div>
                          <div className="font-semibold text-foreground">{college.cutoff}%</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Available Streams</h4>
                        <div className="flex flex-wrap gap-2">
                          {college.streams.map(s => (
                            <Badge key={s} variant="secondary">{s}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          For J&K Students: Don't forget to check eligibility for the PMSSS scholarship when applying outside J&K, or state scholarships when applying within J&K.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {filteredColleges.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            No colleges found matching your criteria. Try relaxing your filters.
          </div>
        )}
      </div>
    </div>
  );
}
