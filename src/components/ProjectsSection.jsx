import { ArrowRight, ExternalLink, Github } from "lucide-react";
import p1 from "../assets/Projects/p1.png";
import p2 from "../assets/Projects/p2.png";
const projects = [
  {
    id: 1,
    title: "Scan-To-Save",
    description: "Scan-To-Save is a web-based application designed to assist during emergency situations by providing an accessible way for strangers or bystanders to retrieve someone’s emergency contact information.",
    image: p1,
    tags: ["Flask", "HTML", "SQLite", "Render", "Twilio"],
    demoUrl: "https://scan-to-save.onrender.com/",
    githubUrl: "https://github.com/Parshuram02/Scan-To-Save",
  },
  {
    id: 2,
    title: "🔒 Encrypted-Chat",
    description:
      "Encrypted-Chat is a real-time, end-to-end encrypted chat platform that allows users to create private chat rooms and communicate securely. No logs, no tracking—just pure privacy.",
    image: p2,
    tags: ["TypeScript", "React", "WebSocket.io"],
    demoUrl: "https://encryptedchat.netlify.app/",
    githubUrl: "https://github.com/Parshuram02/Encrypted-Chat",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={30} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};