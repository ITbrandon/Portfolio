import { Link } from "react-router-dom";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Layout } from "../components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="container-narrow py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-primary font-mono text-sm mb-4 animate-fade-in">
            Hello, I'm
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Brandon Iticka
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I build scalable, accessible, and performant user interfaces. 
            Specialized in React, Web Components, and modern frontend architecture 
            with a focus on testing, maintainability, and AI-powered interfaces.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/ITbrandon" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
            Core Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React & TypeScript",
              "Web Components (Lit.js)",
              "Testing & TDD",
              "Performance Optimization",
            ].map((skill) => (
              <div
                key={skill}
                className="text-sm text-foreground font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
