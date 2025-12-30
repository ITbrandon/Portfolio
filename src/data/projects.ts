export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "component-library",
    title: "Luminex Component Library",
    description: "Built a visually vibrant, framework-agnostic UI component library using Lit.js Web Components, demonstrated in a React + Vite dashboard. Components are fully responsive, accessible, and reusable, bundled with Rollup and distributed via npm, with comprehensive unit testing to ensure scalability and maintainability across multiple applications.",
    techStack: ["Lit.js", "React", "TypeScript", "Rollup", "Jest", "Vite", "Storybook"],
    demoUrl: "https://luminex-ui-platform.netlify.app/",
    githubUrl: "https://github.com/ITbrandon/luminex-ui-platform",
  },
  {
    id: "ai-widget",
    title: "AI-Powered UI Widgets",
    description: "Developed a production-style AI-assisted dashboard UI focused on frontend experience rather than AI modeling. Implemented intelligent components with streaming responses, loading and error states, and thoughtful UX patterns such as skeleton loaders and typing indicators, showcasing real-world async state management in a SaaS interface.",
    techStack: ["React", "TypeScript", "External UI Library (shadcn/ui)", "Fetch API", "Jest / Vitest"],
    demoUrl: "https://ai-ui-widgets.netlify.app/",
    githubUrl: "https://github.com/ITbrandon/ai-ui-widgets",
  },
  {
    id: "enterprise-dashboard",
    title: "Enterprise-Style Dashboard",
    description: "Built a high-performance, enterprise-grade admin dashboard for a global tech company. Features include lazy-loaded routes, large data tables with pagination, charts, theme switching, and mobile responsiveness. Emphasized performance optimization with memoization, code splitting, and Lighthouse score improvements. Designed for scalability, real-world UI complexity, and production readiness.",
    techStack: ["React", "TypeScript", "React Router", "Vite", "Tailwind CSS", "Recharts"],
    demoUrl: "https://enterprise-insights-hub.netlify.app/login",
    githubUrl: "https://github.com/ITbrandon/Enterprise-Insights-Hub",
  },
  {
    id: "vanilla-js-ui",
    title: "Vanilla JavaScript Data Table",
    description: "Built a fully functional Dynamic Data Table using only raw HTML, CSS, and JavaScript. Implements sorting, filtering, search, pagination, and column visibility toggles. Focused on accessibility, performance, and clean, framework-free architecture with all logic contained in a single JavaScript file.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://itbrandon.github.io/Vanilla-JavaScript-Data-Table/",
    githubUrl: "https://github.com/ITbrandon/Vanilla-JavaScript-Data-Table",
  },
  {
    id: "testing-showcase",
    title: "Feature Toggles",
    description: "Built a React application with a strong focus on comprehensive unit testing. Every component includes snapshot and behavior tests, covering edge cases and user interactions. Demonstrates expertise in writing maintainable, reliable, and high-coverage tests using modern testing tools.",
    techStack: ["React", "TypeScript", "Jest", "Vitest", "React Testing Library"],
    demoUrl: "https://unit-testing-project.netlify.app/",
    githubUrl: "https://github.com/ITbrandon/Unit-Testing-Project",
  },
];
