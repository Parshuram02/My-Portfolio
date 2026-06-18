import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useRef } from "react";
import p1 from "../assets/Projects/p1.png";
import p2 from "../assets/Projects/p2.png";
import p3 from "../assets/Projects/p3.png";
import p4 from "../assets/Projects/p4.png";

const projects = [
  {
    id: 1,
    title: "Scan-To-Save",
    description: "Scan-To-Save is a web-based application designed to assist during emergency situations by providing an accessible way for strangers or bystanders to retrieve someone's emergency contact information.",
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
  {
    id: 3,
    title: "Axiom Math AI Bot",
    description:
      "Axiom Math AI is a full-stack, pedagogical tutoring engine designed to guide students through complex mathematics with step-by-step intelligent explanations.",
    image: p3,
    tags: ["Python", "React", "TensorFlow"],
    demoUrl: "https://axiom-math-ai.vercel.app/",
    githubUrl: "https://github.com/Parshuram02/Axiom-Math-AI-Bot",
  },
  {
    id: 4,
    title: "🚖 Campus Pool",
    description: "A real-time carpooling platform for university students. Features instant ride search with geospatial queries, Socket.io group chat, automatic fare splitting, and secure JWT verification.",
    image: p4,
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    demoUrl: "https://campus-pool-puce.vercel.app",
    githubUrl: "https://github.com/Parshuram02/Campus-Pool",
  },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const VISIBLE = 3; // cards visible at once on desktop

  const scrollTo = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const card = scrollRef.current.children[index];
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  };

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () => scrollTo(Math.min(projects.length - 1, activeIndex + 1));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 p-2 rounded-full bg-card border border-border shadow-lg hover:bg-primary/20 hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={20} className="text-primary" />
          </button>

          {/* Scrollable Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group flex-shrink-0 w-[85vw] sm:w-[48%] lg:w-[31%] bg-card rounded-xl overflow-hidden shadow-md border border-border/40 card-hover cursor-pointer snap-start transition-all duration-300"
                onClick={(e) => {
                  if (e.target.closest("a")) return;
                  window.open(project.demoUrl, "_blank");
                }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Click to view demo →</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 p-2 rounded-full bg-card border border-border shadow-lg hover:bg-primary/20 hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={20} className="text-primary" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-primary scale-125 w-6 rounded-full"
                  : "bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Parshuram02?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};