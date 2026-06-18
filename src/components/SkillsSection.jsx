import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiCplusplus, SiPython, SiJavascript, SiOracle,
  SiHtml5, SiCss3, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiFigma,
  SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank
} from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

const skills = [
  { name: "Data Structures & Algorithms", level: 90, category: "cp", icon: null },
  { name: "Competitive Programming", level: 95, category: "cp", icon: null },
  { name: "C++", level: 95, category: "languages", icon: SiCplusplus },
  { name: "Python", level: 85, category: "languages", icon: SiPython },
  { name: "Java", level: 80, category: "languages", icon: SiOracle },
  { name: "JavaScript", level: 90, category: "languages", icon: SiJavascript },
  { name: "HTML / CSS", level: 95, category: "frontend", icon: SiHtml5 },
  { name: "React", level: 90, category: "frontend", icon: SiReact },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: SiTailwindcss },
  { name: "Node.js", level: 80, category: "backend", icon: SiNodedotjs },
  { name: "Express.js", level: 75, category: "backend", icon: SiExpress },
  { name: "MongoDB", level: 70, category: "database", icon: SiMongodb },
  { name: "Git / GitHub", level: 90, category: "tools", icon: SiGit },
  { name: "VS Code", level: 95, category: "tools", icon: SiGit },
  { name: "Figma", level: 85, category: "tools", icon: SiFigma },
];

const categories = ["all", "cp", "languages", "frontend", "backend", "database", "tools"];

const cpStats = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "text-yellow-400",
    bgColor: "group-hover:bg-yellow-400/10",
    borderColor: "group-hover:border-yellow-400/40",
    count: 550,
    suffix: "+",
    label: "Problems Solved",
    link: "https://leetcode.com/u/prashant24816/",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    color: "text-blue-400",
    bgColor: "group-hover:bg-blue-400/10",
    borderColor: "group-hover:border-blue-400/40",
    count: 1340,
    suffix: "",
    label: "Max Rating",
    link: "https://codeforces.com/profile/prashant24816gp",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    color: "text-orange-400",
    bgColor: "group-hover:bg-orange-400/10",
    borderColor: "group-hover:border-orange-400/40",
    count: 1672,
    suffix: "",
    label: "Max Rating",
    link: "https://www.codechef.com/users/parshuram_2005",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    color: "text-green-400",
    bgColor: "group-hover:bg-green-400/10",
    borderColor: "group-hover:border-green-400/40",
    count: 5,
    suffix: "★",
    label: "Problem Solving",
    link: "https://www.hackerrank.com/profile/prashant24816gp",
  },
];

const SkillCard = ({ skill, idx, isVisible }) => (
  <div
    className={cn(
      "bg-card/60 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-border/40",
      "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1",
      "flex flex-col items-center gap-3",
      "opacity-0 translate-y-6",
      isVisible && "opacity-100 translate-y-0"
    )}
    style={{ transition: `opacity 0.5s ease ${idx * 60}ms, transform 0.5s ease ${idx * 60}ms, box-shadow 0.3s, border-color 0.3s` }}
  >
    <div className="flex items-center gap-3">
      {skill.icon && <skill.icon className="text-3xl text-primary" />}
      <h3 className="font-semibold text-base text-center">{skill.name}</h3>
    </div>
    <div className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden">
      <div
        className="bg-gradient-to-r from-primary to-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
      />
    </div>
    <span className="text-xs font-bold text-primary">{skill.level}%</span>
  </div>
);

const StatCard = ({ stat, isVisible }) => {
  const count = useCountUp(stat.count, 1600, isVisible);
  return (
    <a
      href={stat.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group p-6 bg-card/60 backdrop-blur-sm rounded-2xl shadow-md border border-border/40",
        "hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-44",
        stat.bgColor, stat.borderColor
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <stat.icon className={`text-4xl ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">{stat.name}</h4>
        <p className={`text-2xl font-extrabold ${stat.color}`}>
          {count}{stat.suffix}
        </p>
        <p className="text-xs text-muted-foreground">{stat.label}</p>
      </div>
    </a>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            Technologies and tools I work with regularly.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-all capitalize font-medium text-sm",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md scale-105 shadow-primary/30"
                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} idx={idx} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* CP / DSA Stats with Count-up */}
        <div
          ref={statsRef}
          className={cn(
            "mt-16 transition-all duration-700",
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            🧠 Competitive Programming Stats
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {cpStats.map((stat) => (
              <StatCard key={stat.name} stat={stat} isVisible={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
