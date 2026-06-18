import { useScrollReveal } from "../hooks/useScrollReveal";

const timeline = [
  {
    year: "2023 – Present",
    title: "B.Tech – Computer Science & Engineering",
    org: "Symbiosis Institute of Technology, Pune",
    description:
      "Pursuing CSE with a focus on Data Structures, Algorithms, and Full-Stack Web Development. Active competitive programmer.",
    type: "education",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    org: "Personal Projects",
    description:
      "Built Scan-To-Save (emergency contact QR app), Encrypted-Chat (E2E encrypted messaging), Axiom Math AI (AI tutoring engine), and Campus Pool (carpooling platform).",
    type: "project",
    icon: "💻",
  },
  {
    year: "2024",
    title: "Competitive Programming",
    org: "LeetCode · Codeforces · CodeChef",
    description:
      "Solved 550+ problems on LeetCode. Achieved Max Rating 1340 on Codeforces and 1672 on CodeChef. 5★ on HackerRank.",
    type: "achievement",
    icon: "🏆",
  },
  {
    year: "2022",
    title: "12th Grade – PCM",
    org: "GD Goenka Public School",
    description:
      "Completed 12th with Physics, Chemistry, Mathematics. Developed interest in programming and competitive coding.",
    type: "education",
    icon: "📚",
  },
];

const typeColors = {
  education: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  project: "text-primary bg-primary/10 border-primary/30",
  achievement: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
};

const TimelineCard = ({ item, index }) => {
  const { ref, isVisible } = useScrollReveal();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-6 md:gap-0 mb-12 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left side (desktop) */}
      <div className={`hidden md:flex flex-1 ${isLeft ? "justify-end pr-10" : "justify-start pl-10 order-last"}`}>
        <div className="max-w-sm w-full group">
          <div className={`p-5 rounded-2xl border bg-card/60 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 ${typeColors[item.type].split(" ")[2]}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${typeColors[item.type]}`}>
                {item.year}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
            <p className="text-primary text-sm font-medium mb-2">{item.org}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <div className={`w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform`}>
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden items-start gap-4 w-full">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full border-2 border-primary bg-background flex items-center justify-center mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <div className="w-px flex-1 bg-border mt-2" />
        </div>
        <div className="flex-1 pb-4">
          <div className={`p-4 rounded-xl border bg-card/60 backdrop-blur-sm ${typeColors[item.type].split(" ")[2]}`}>
            <div className="flex items-center gap-2 mb-2">
              <span>{item.icon}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${typeColors[item.type]}`}>
                {item.year}
              </span>
            </div>
            <h3 className="font-bold text-base mb-1">{item.title}</h3>
            <p className="text-primary text-sm font-medium mb-1">{item.org}</p>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Right empty side (desktop alternating) */}
      {isLeft && <div className="hidden md:flex flex-1 pl-10" />}
      {!isLeft && <div className="hidden md:flex flex-1 pr-10 order-first" />}
    </div>
  );
};

export const TimelineSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="timeline" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my education, achievements, and projects that shaped who I am today.
          </p>
        </div>

        {/* Vertical line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-40 bottom-24 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
