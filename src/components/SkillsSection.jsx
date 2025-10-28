import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  SiCplusplus, SiPython, SiJavascript, SiOracle, // <-- replace SiJava with SiOracle
  SiHtml5, SiCss3, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiFigma,
  SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank
} from "react-icons/si";


// Skills array
const skills = [
  // Languages
  { name: "C++", level: 95, category: "languages", icon: SiCplusplus },
  { name: "Python", level: 85, category: "languages", icon: SiPython },
  { name: "Java", level: 80, category: "languages", icon: SiOracle },
  { name: "JavaScript", level: 90, category: "languages", icon: SiJavascript },

  // Frontend
  { name: "HTML / CSS", level: 95, category: "frontend", icon: SiHtml5 },
  { name: "React", level: 90, category: "frontend", icon: SiReact },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: SiTailwindcss },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: SiNodedotjs },
  { name: "Express.js", level: 75, category: "backend", icon: SiExpress },

  // Database
  { name: "MongoDB", level: 70, category: "database", icon: SiMongodb },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools", icon: SiGit },
  { name: "VS Code", level: 95, category: "tools", icon: SiGit },
  { name: "Figma", level: 85, category: "tools", icon: SiFigma },

  // CP & DSA
  { name: "Data Structures & Algorithms", level: 90, category: "cp", icon: null },
  { name: "Competitive Programming", level: 95, category: "cp", icon: null },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "database",
  "tools",
  "cp",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const progress = animated ? skill.level : 0;
            const Icon = skill.icon;

            return (
              <div
                key={idx}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center gap-4 hover:scale-105 hover:shadow-primary/50"
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="text-3xl text-primary" />}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-3 rounded-full origin-left transition-all duration-1500 ease-out"
                    style={{ width: progress + "%" }}
                  />
                </div>

                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            );
          })}
        </div>

        {/* 🧠 CP / DSA Stats */}
{activeCategory === "cp" && (
  <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
    {[
      {
        name: "LeetCode",
        icon: SiLeetcode,
        color: "text-yellow-500",
        stats: "550+ Problems Solved",
        link: "https://leetcode.com/u/prashant24816/",
      },
      {
        name: "Codeforces",
        icon: SiCodeforces,
        color: "text-blue-500",
        stats: "Max Rating 1340",
        link: "https://codeforces.com/profile/prashant24816gp",
      },
      {
        name: "CodeChef",
        icon: SiCodechef,
        color: "text-orange-500",
        stats: "Max Rating 1672",
        link: "https://www.codechef.com/users/parshuram_2005",
      },
      {
        name: "HackerRank",
        icon: SiHackerrank,
        color: "text-green-500",
        stats: "5★ Problem Solving",
        link: "https://www.hackerrank.com/profile/prashant24816gp",
      },
    ].map(({ name, icon: Icon, color, stats, link }, i) => (
      <a
        key={i}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-6 bg-card rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-48 border border-border/20"
      >
        <div className="flex flex-col items-center">
          <Icon className={`text-4xl ${color} group-hover:scale-110 transition-transform duration-300`} />
          <h4 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">{stats}</p>
        </div>
      </a>
    ))}
  </div>
)}

      </div>
    </section>
  );
};
