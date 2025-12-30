import { Layout } from "../components/layout/Layout";

const skills = [
  {
    category: "Frontend Frameworks",
    items: ["React", "TypeScript", "Lit.js Web Components"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "CSS Modules", "Figma to Code"],
  },
  {
    category: "Testing",
    items: ["Jest", "Vitest", "React Testing Library", "Cypress"],
  },
  {
    category: "Build & Tooling",
    items: ["Vite", "Rollup", "Webpack", "npm/pnpm"],
  },
  {
    category: "Performance",
    items: ["Code Splitting", "Lazy Loading", "Core Web Vitals"],
  },
  {
    category: "Architecture",
    items: ["Component Libraries", "Design Systems", "Accessibility (WCAG)"],
  },
];

const About = () => {
  return (
    <Layout>
      <section className="container-narrow py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          About
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
            <p>
              I'm a frontend developer specializing in building scalable, 
              maintainable user interfaces for enterprise applications. My work 
              focuses on component-driven architecture, comprehensive testing, 
              and performance optimization.
            </p>
            
            <p>
              I have experience building framework-agnostic component libraries 
              using Web Components, integrating AI-powered features into user 
              interfaces, and translating Figma designs into pixel-perfect, 
              responsive implementations.
            </p>
            
            <p>
              I believe in writing clean, testable code and prioritize 
              accessibility in every project. My approach emphasizes reusability,
              maintainability, and developer experience while delivering 
              polished user experiences.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-foreground mb-8">
            Technical Skills
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
