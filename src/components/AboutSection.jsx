import profileImage from "../assets/p_yfinal.jpg";
import resumePDF from "../assets/prashant_resume.pdf";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background/50 backdrop-blur-lg">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-glow">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text Section */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">Who Am I?</h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-primary font-semibold">Prashant</span>, a Full-Stack Developer and 
              Competitive Programmer with a strong foundation in 
              <span className="text-primary font-semibold"> Data Structures & Algorithms</span>. 
              I enjoy building clean, intuitive products with strong performance and thoughtful design.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I regularly practice CP on platforms like 
              <span className="font-medium"> LeetCode, Codeforces, and CodeChef</span>, 
              where I focus on writing efficient and optimized solutions under constraints.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              In development, I enjoy working across the stack — from frontend UI components to backend architecture. 
              I love combining logic + creativity to build impactful digital experiences.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Outside tech, I enjoy exploring new tools, learning continuously, playing sports, and traveling.
            </p>
          </div>

          {/* Right Side: Online Links → Photo → Buttons */}
          <div className="flex flex-col items-center gap-6">

            {/* Online Profiles Above Image */}
            <div className="space-y-3 text-center">
              <h4 className="text-lg font-semibold text-primary">Find Me Online</h4>
              <div className="flex flex-wrap justify-center gap-4 text-xl">
                <a href="https://leetcode.com/u/prashant24816/" target="_blank" className="flex items-center gap-2 hover:text-primary transition">
                  <SiLeetcode /> LeetCode
                </a>
                {/* <a href="https://codeforces.com/profile/prashant24816gp" target="_blank" className="flex items-center gap-2 hover:text-primary transition">
                  <SiCodeforces /> Codeforces
                </a> */}
                {/* <a href="https://www.codechef.com/users/parshuram_2005" target="_blank" className="flex items-center gap-2 hover:text-primary transition">
                  <SiCodechef /> CodeChef
                </a> */}
                <a href="https://github.com/Parshuram02" target="_blank" className="flex items-center gap-2 hover:text-primary transition">
                  <SiGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/prashant-singh-62301827b/" target="_blank" className="flex items-center gap-2 hover:text-primary transition">
                  <SiLinkedin /> LinkedIn
                </a>
                <a href="https://www.instagram.com/prashant16842/" target="_blank" className="flex items-center gap-2 hover:text-primary transition">
                  <SiInstagram /> Insta
                </a>
              </div>
            </div>

            {/* Photo */}
            <img
              src={profileImage}
              alt="Prashant"
              className="rounded-2xl shadow-2xl w-72 h-auto object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Buttons Under Photo */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>

              <a
                href="https://drive.google.com/drive/folders/1Owek2Vs3-raw8IcqS_XL7nWuMI9ZnY0U?usp=drive_link"
                download
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
