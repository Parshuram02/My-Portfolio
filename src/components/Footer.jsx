import { ArrowUp, Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode, SiInstagram } from "react-icons/si";

const socials = [
  { icon: SiGithub, href: "https://github.com/Parshuram02", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/prashant-singh-62301827b/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/prashant24816/", label: "LeetCode" },
  { icon: SiInstagram, href: "https://www.instagram.com/prashant16842/", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-6">

        {/* Social Icons */}
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="w-24 h-px bg-border" />

        {/* Copyright + Back to Top */}
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground flex-wrap gap-4">
          <p>
            © {new Date().getFullYear()} Prashant Singh — Built with{" "}
            <Heart size={12} className="inline text-primary" /> & React
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span className="text-xs font-medium">Back to top</span>
          </a>
        </div>

      </div>
    </footer>
  );
};