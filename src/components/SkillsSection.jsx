import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiCplusplus, SiPython, SiJavascript, SiOracle,
  SiHtml5, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiFigma, SiPostman, SiVercel, SiRender, SiNetlify,
  SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank
} from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

/* ─── Skill data ───────────────────────────────── */
const skills = [
  // Languages
  { name: "C++", level: 95, category: "languages", icon: SiCplusplus,   color: "#00599C", desc: "Primary DSA & CP language. Used for Trees, Graphs, DP, Greedy & Binary Search on LeetCode/CF." },
  { name: "Python", level: 85, category: "languages", icon: SiPython,   color: "#3776AB", desc: "Used in Axiom Math AI project, DSA problem solving, scripting, and competitive programming." },
  { name: "JavaScript", level: 90, category: "languages", icon: SiJavascript, color: "#F7DF1E", desc: "Core language for all full-stack projects." },
  { name: "Java", level: 80, category: "languages", icon: SiOracle,     color: "#F80000", desc: "OOP fundamentals and academic coursework." },

  // Frontend
  { name: "React", level: 90, category: "frontend", icon: SiReact,       color: "#61DAFB", desc: "Built all frontends — Campus Pool, Encrypted-Chat, portfolio." },
  { name: "HTML / CSS", level: 95, category: "frontend", icon: SiHtml5,  color: "#E34F26", desc: "Strong foundation in semantic markup and layouts." },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: SiTailwindcss, color: "#06B6D4", desc: "Used across all React projects for rapid UI development." },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: SiNodedotjs,  color: "#339933", desc: "REST API development and Socket.io real-time apps." },
  { name: "Express.js", level: 75, category: "backend", icon: SiExpress, color: "#ffffff", desc: "Backend framework for Campus Pool and API services." },

  // Database
  { name: "MongoDB", level: 70, category: "database", icon: SiMongodb,   color: "#47A248", desc: "NoSQL DB for Campus Pool with geospatial queries." },
  { name: "MySQL", level: 72, category: "database", icon: SiMysql,       color: "#4479A1", desc: "Relational DB used in Scan-To-Save with BI dashboards." },

  // Tools
  { name: "Git / GitHub", level: 92, category: "tools", icon: SiGit,     color: "#F05032", desc: "Daily use — version control, branching, open source." },
  { name: "Postman", level: 85, category: "tools", icon: SiPostman,      color: "#FF6C37", desc: "API testing for all backend projects." },
  { name: "Figma", level: 80, category: "tools", icon: SiFigma,          color: "#F24E1E", desc: "UI/UX wireframing before development." },
  { name: "Vercel", level: 88, category: "tools", icon: SiVercel,        color: "#ffffff", desc: "Deployed Campus Pool frontend and portfolio." },
  { name: "Render", level: 82, category: "tools", icon: SiRender,        color: "#46E3B7", desc: "Deployed Scan-To-Save Flask backend. Free tier cloud hosting." },
  { name: "Netlify", level: 80, category: "tools", icon: SiNetlify,      color: "#00C7B7", desc: "Deployed Encrypted-Chat SPA frontend with continuous deployment." },

  // CP
  { name: "DSA", level: 92, category: "cp", icon: null, color: "#a78bfa", desc: "Strong in Trees, Graphs, DP, Greedy, Binary Search, Backtracking — practiced in C++, Python & Java." },
  { name: "Competitive Prog.", level: 90, category: "cp", icon: null,    color: "#a78bfa", desc: "700+ LeetCode · CF 1320 · CodeChef 1672 · 200+ day streak. Uses C++, Python for all platforms." },
];

const categories = ["all", "languages", "frontend", "backend", "database", "tools", "cp"];

/* ─── CP Stats ─────────────────────────────────── */
const cpStats = [
  { name: "LeetCode",  icon: SiLeetcode,  color: "text-yellow-400", bgHover: "group-hover:bg-yellow-400/10", count: 700,  suffix: "+", label: "Problems Solved", link: "https://leetcode.com/u/prashant24816/" },
  { name: "Codeforces",icon: SiCodeforces,color: "text-blue-400",   bgHover: "group-hover:bg-blue-400/10",   count: 1320, suffix: "",  label: "Max Rating",     link: "https://codeforces.com/profile/prashant24816gp" },
  { name: "CodeChef",  icon: SiCodechef,  color: "text-orange-400", bgHover: "group-hover:bg-orange-400/10",count: 1672, suffix: "",  label: "Max Rating",     link: "https://www.codechef.com/users/parshuram_2005" },
  { name: "HackerRank",icon: SiHackerrank,color: "text-green-400",  bgHover: "group-hover:bg-green-400/10", count: 5,    suffix: "★", label: "Problem Solving",link: "https://www.hackerrank.com/profile/prashant24816gp" },
];

/* ─── Circular progress ring ───────────────────── */
const Ring = ({ level, color, size = 64 }) => {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (level / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={6} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={6}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1s ease" }}
      />
    </svg>
  );
};

/* ─── Flip card ────────────────────────────────── */
const FlipCard = ({ skill, isVisible, idx }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      className={cn(
        "h-40 cursor-pointer transition-all duration-500",
        "opacity-0 translate-y-4",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${idx * 50}ms`, perspective: "800px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-label={`${skill.name} skill card`}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          {Icon
            ? <Icon className="text-3xl" style={{ color: skill.color }} />
            : <span className="text-3xl">⚡</span>
          }
          <span className="font-semibold text-sm text-center px-2">{skill.name}</span>
          <div className="w-3/4 h-1.5 bg-secondary/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: isVisible ? `${skill.level}%` : "0%",
                background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{skill.level}%</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-primary/40 bg-primary/5 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Ring level={skill.level} color={skill.color} size={56} />
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-0">
            <span className="font-bold text-lg" style={{ color: skill.color }}>{skill.level}%</span>
          </div>
          <p className="text-xs text-muted-foreground text-center leading-tight mt-10 px-1">
            {skill.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── Stat card with count-up ──────────────────── */
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
        stat.bgHover
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <stat.icon className={`text-4xl ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">{stat.name}</h4>
        <p className={`text-2xl font-extrabold ${stat.color}`}>{count}{stat.suffix}</p>
        <p className="text-xs text-muted-foreground">{stat.label}</p>
      </div>
    </a>
  );
};

/* ─── Main section ─────────────────────────────── */
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });

  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
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
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-2 text-sm max-w-xl mx-auto">
            Hover a card to flip it — see proficiency level and how I've used each skill.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all duration-200",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md scale-105 shadow-primary/30"
                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Flip Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((skill, idx) => (
              <FlipCard key={skill.name} skill={skill} isVisible={isVisible} idx={idx} />
            ))}
          </div>

          {/* Hint */}
          <p className="text-center text-xs text-muted-foreground mt-4 opacity-60">
            💡 Hover or tap any card to flip
          </p>
        </div>

        {/* CP Stats with count-up */}
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
