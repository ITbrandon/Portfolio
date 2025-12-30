import { Github, Mail } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "brandoniticka@gmail.com",
    href: "mailto:brandoniticka@gmail.com",
    description: "Best way to reach me for opportunities",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/ITbrandon",
    href: "https://github.com/ITbrandon",
    description: "View my open source work and projects",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="container-narrow py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h1>
          
          <p className="text-muted-foreground text-lg mb-12">
            Interested in working together? I'm open to frontend development 
            opportunities, particularly roles focused on React, component 
            libraries, and enterprise applications.
          </p>

          <div className="space-y-6">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 -mx-4 rounded-xl transition-colors hover:bg-secondary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary group-hover:bg-muted transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {link.label}
                  </h3>
                  <p className="text-sm text-primary font-mono mb-1">
                    {link.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:brandoniticka@gmail.com">
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
