import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";

const roles = [
  "Full-Stack Developer",
  "Competitive Programmer",
  "Problem Solver",
  "DSA Enthusiast",
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="text-foreground opacity-0 animate-fade-in">Hello, I'm </span>
            <span
              className="opacity-0 animate-fade-in-delay-1"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #818cf8, #38bdf8, #a78bfa)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientShift 4s ease infinite, fade-in 0.7s ease-out 0.2s forwards",
              }}
            >
              Prashant
            </span>
          </h1>

          {/* Typewriter Role */}
          <div className="h-10 flex items-center justify-center opacity-0 animate-fade-in-delay-2">
            <span className="text-xl md:text-2xl font-medium text-primary">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            Crafting secure, scalable, and intelligent web experiences. I love
            solving complex problems — from algorithms to architecture — and
            turning ideas into impactful digital products.
          </p>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center gap-5 opacity-0 animate-fade-in-delay-3">
            <a
              href="https://github.com/Parshuram02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <SiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-singh-62301827b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={22} />
            </a>
            <a
              href="https://leetcode.com/u/prashant24816/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="LeetCode"
            >
              <SiLeetcode size={22} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};