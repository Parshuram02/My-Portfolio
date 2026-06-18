import profileImage from "../assets/p_yfinal.jpg";
import { SiLeetcode, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-background/50 backdrop-blur-lg">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-glow">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-5 text-left">
            <h3 className="text-2xl font-semibold">Who Am I?</h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-primary font-semibold">Prashant Singh</span>, a Full-Stack
              Developer and Competitive Programmer pursuing{" "}
              <span className="text-primary font-semibold">B.E. Information Technology</span> at{" "}
              <span className="text-primary font-semibold">Army Institute of Technology, Pune</span>{" "}
              (2023–2027) with an SGPA of{" "}
              <span className="text-primary font-semibold">9.2</span>.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I maintain a <span className="text-primary font-semibold">200+ day streak</span> on
              LeetCode and actively compete on Codeforces and CodeChef — sharpening
              analytical thinking and algorithmic problem-solving under pressure.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              In development, I enjoy working across the full stack — from backend architecture
              and REST APIs to polished, responsive frontends. I love combining logic + creativity
              to build impactful digital products.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              🏆 <span className="text-primary font-semibold">1st Prize</span> at Campus Beats Hackathon ·{" "}
              <span className="text-primary font-semibold">1st Rank</span> at Enliven-2 ·{" "}
              <span className="text-primary font-semibold">3rd Rank</span> at PICT Web-Weaver ·{" "}
              Qualified Round 2 — Hackoona Matata (IIIT Kottayam).
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Outside tech, I play{" "}
              <span className="font-medium text-foreground">cricket, volleyball &amp; athletics</span> —
              sports that built my teamwork, discipline, and composure under pressure.
            </p>
          </div>

          {/* ── Right: original layout ── */}
          <div className="flex flex-col items-center gap-6">

            {/* Find Me Online */}
            <div className="space-y-3 text-center">
              <h4 className="text-lg font-semibold text-primary">Find Me Online</h4>
              <div className="flex flex-wrap justify-center gap-4 text-xl">
                <a
                  href="https://leetcode.com/u/prashant24816/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <SiLeetcode /> LeetCode
                </a>
                <a
                  href="https://github.com/Parshuram02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <SiGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prashant-singh-62301827b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <SiLinkedin /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/prashant16842/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <SiInstagram /> Insta
                </a>
              </div>
            </div>

            {/* Photo */}
            <img
              src={profileImage}
              alt="Prashant Singh"
              className="rounded-2xl shadow-2xl w-72 h-auto object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Owek2Vs3-raw8IcqS_XL7nWuMI9ZnY0U?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button-secondary rounded-full border border-primary px-6 py-3 text-primary hover:bg-primary/10 transition"
              >
                View Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
