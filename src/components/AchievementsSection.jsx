import { Linkedin, ExternalLink, Trophy, Award, Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const hackathons = [
  {
    id: 1,
    date: "May 2026",
    rank: "🥇 1st Prize",
    rankColor: "text-yellow-400",
    rankBg: "bg-yellow-400/10 border-yellow-400/40",
    dotColor: "bg-yellow-400",
    event: "Campus Beats Hackathon",
    organizer: "ZS Associates, Pune",
    description: "Solved a real-world business problem related to the BTSA role at ZS's office. Competed against teams from top institutes across India.",
    image: new URL("../assets/Projects/Campus beats.png", import.meta.url).href,
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7466049993615765504/",
    tags: ["Data Analytics", "Python", "BTSA"],
    icon: Trophy,
  },
  {
    id: 2,
    date: "Dec–Jan 2026",
    rank: "✅ Round 2 Qualified",
    rankColor: "text-purple-400",
    rankBg: "bg-purple-400/10 border-purple-400/40",
    dotColor: "bg-purple-400",
    event: "Adobe India Hackathon",
    organizer: "Adobe India",
    description: "Built an ML-powered tool that extracts data from PDFs and lets an LLM answer queries on top of it — a full RAG pipeline.",
    image: null,
    linkedin: null,
    tags: ["ML", "LLM", "RAG", "PDF"],
    icon: Star,
  },
  {
    id: 3,
    date: "July 2025",
    rank: "🥇 1st Rank",
    rankColor: "text-yellow-400",
    rankBg: "bg-yellow-400/10 border-yellow-400/40",
    dotColor: "bg-yellow-400",
    event: "Enliven-2 Hackathon",
    organizer: "Army Institute of Technology, Pune",
    description: "Extended Scan-To-Save with advanced security features — hardened authentication, improved audit logging, and GDPR-compliant data handling.",
    image: null,
    linkedin: null,
    tags: ["Flask", "Security", "Scan-To-Save"],
    icon: Trophy,
  },
  {
    id: 4,
    date: "Feb 2025",
    rank: "🥉 3rd Rank",
    rankColor: "text-orange-400",
    rankBg: "bg-orange-400/10 border-orange-400/40",
    dotColor: "bg-orange-400",
    event: "Web-Weaver Hackathon",
    organizer: "PICT, Pune",
    description: "Built and presented Scan-To-Save — an emergency QR-based contact retrieval app with Flask backend and SQL-powered dashboards.",
    image: new URL("../assets/Projects/PICT.png", import.meta.url).href,
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7299873663888072704/",
    tags: ["Flask", "SQL", "Scan-To-Save"],
    icon: Award,
  },
  {
    id: 5,
    date: "Sep 2024",
    rank: "✅ Round 2 Qualified",
    rankColor: "text-blue-400",
    rankBg: "bg-blue-400/10 border-blue-400/40",
    dotColor: "bg-blue-400",
    event: "Hackoona Matata",
    organizer: "IIIT Kottayam",
    description: "Built Encrypted-Chat here — a real-time E2E encrypted messaging app with WebSocket, private rooms, and zero-log policy.",
    image: null,
    linkedin: null,
    tags: ["WebSocket", "React", "Encrypted-Chat"],
    icon: Award,
  },
];

const placeholderGrad = {
  "text-yellow-400": "from-yellow-500/20 to-yellow-400/5",
  "text-purple-400": "from-purple-500/20 to-purple-400/5",
  "text-orange-400": "from-orange-500/20 to-orange-400/5",
  "text-blue-400":   "from-blue-500/20 to-blue-400/5",
};

const HackathonCard = ({ h, index, isVisible }) => {
  const IconComp = h.icon;

  return (
    <div
      className={`transition-all duration-600 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline row */}
      <div className="flex items-center gap-4 mb-2">
        {/* Dot + date */}
        <div className="flex items-center gap-2 min-w-[110px] justify-end">
          <span className="text-xs text-muted-foreground whitespace-nowrap">{h.date}</span>
          <div className={`w-3 h-3 rounded-full flex-shrink-0 ${h.dotColor} shadow-md`} />
        </div>

        {/* Vertical line segment (hidden on last) */}
        <div className="hidden" />

        {/* Card */}
        <div className="group flex-1 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-default">

          {/* Always visible: compact header */}
          <div className="flex items-center gap-3 p-4">
            {/* Photo thumbnail or icon */}
            <div className={`w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br ${placeholderGrad[h.rankColor] ?? "from-primary/20 to-transparent"}`}>
              {h.image ? (
                <img
                  src={h.image}
                  alt={h.event}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <IconComp size={24} className={`${h.rankColor} opacity-60`} />
                </div>
              )}
            </div>

            {/* Title + organizer + badges */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <h3 className="font-bold text-sm truncate">{h.event}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border flex-shrink-0 ${h.rankBg} ${h.rankColor}`}>
                  {h.rank}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{h.organizer}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-1.5">
                {h.tags.map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 text-[10px] rounded-full border border-border/40 bg-secondary/40 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* LinkedIn icon if available */}
            {h.linkedin && (
              <a
                href={h.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0 p-1.5 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn post"
              >
                <Linkedin size={15} />
              </a>
            )}
          </div>

          {/* Hover reveal: description */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-400 ease-in-out">
            <p className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
              {h.description}
            </p>
          </div>
        </div>
      </div>

      {/* Connecting line between cards */}
      {index < hackathons.length - 1 && (
        <div className="flex items-start gap-4 mb-2">
          <div className="min-w-[110px] flex justify-end pr-[5px]">
            <div className="w-px h-4 bg-border/50" />
          </div>
          <div className="flex-1" />
        </div>
      )}
    </div>
  );
};

export const AchievementsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="text-yellow-400" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">
              Hackathon <span className="text-primary">Wins</span>
            </h2>
            <Trophy className="text-yellow-400" size={28} />
          </div>
          <p className="text-muted-foreground text-sm">
            5 hackathons · 2 🥇 · 1 🥉 · 2 national qualifications — hover a card for details
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="space-y-0">
          {hackathons.map((h, index) => (
            <HackathonCard key={h.id} h={h} index={index} isVisible={cardsVisible} />
          ))}
        </div>

      </div>
    </section>
  );
};
