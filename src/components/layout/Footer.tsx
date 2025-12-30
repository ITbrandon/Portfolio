import { Github, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/ITbrandon", icon: Github, label: "GitHub" },
  { href: "mailto:brandoniticka@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brandon Iticka. Built with React & TypeScript.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
