import { Layout } from "../components/layout/Layout";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="container-wide py-24">
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A selection of frontend projects demonstrating component architecture, 
            testing practices, and scalable UI development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
