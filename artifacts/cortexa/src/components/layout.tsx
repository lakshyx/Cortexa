import { Link, useLocation } from "wouter";
import { Menu, X, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Colleges", path: "/colleges" },
    { name: "Careers", path: "/careers" },
    { name: "Scholarships", path: "/scholarships" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Compass className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">CORTEXA</span>
            <span className="hidden md:inline-block ml-2 text-sm text-muted-foreground border-l border-border pl-2">
              Career Guide for J&K
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-2">
              <Link href="/assessment">Take Assessment</Link>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-base font-medium px-2 py-1 rounded-md transition-colors ${
                  location === link.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <Link href="/assessment">Take Assessment</Link>
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-card py-8 md:py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CORTEXA</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              One Stop Personalized Career and Education Advisor for J&K students. Project SIH25093.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Team</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aditya Sahu (Lead & Full Stack)</li>
              <li>Haardik Ukey (Frontend)</li>
              <li>Devyansh Singh Baghel (UI/UX)</li>
              <li>Ishank Kori (Backend)</li>
              <li>Lakshya Chakravarti (Research)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Institution</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Gyan Ganga Institute of Technology & Sciences Jabalpur
            </p>
            <p className="text-sm text-muted-foreground">
              Guide: Prof. Preeti Rai
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Cortexa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
