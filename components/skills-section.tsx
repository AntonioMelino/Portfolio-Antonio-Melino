import { Globe } from "lucide-react";

const skillCategories = [
  {
    key: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Responsive Design",
    ],
  },
  {
    key: "backend",
    title: "Backend",
    skills: [
      "C#",
      ".NET",
      "Java",
      "C++",
      "Node.js",
      "REST APIs / RESTful",
      "JWT / Autenticación",
    ],
  },
  {
    key: "database",
    title: "Base de Datos",
    skills: ["Firebase (Firestore)", "SQL", "MySQL", "Entity Framework (ORM)"],
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    skills: ["Git", "GitHub", "Vercel", "Docker", "AWS", "Azure"],
  },
  {
    key: "ai",
    title: "IA & Dev Tools",
    skills: [
      "Claude Code",
      "DeepSeek",
      "Gemini",
      "GitHub Copilot",
      "Microsoft Copilot",
    ],
  },
  {
    key: "soft",
    title: "Metodologías",
    skills: [
      "Agile",
      "Scrum",
      "Trabajo colaborativo",
      "Resolución de problemas",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">
            // 05. skills.config.ts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tecnologías y herramientas que utilizo para crear soluciones
            robustas y escalables
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full bg-secondary/50">
            <Globe size={13} className="text-primary" />
            <span className="font-mono text-xs text-muted-foreground">
              🇪🇸 Español nativo &nbsp;|&nbsp; 🇬🇧 Inglés técnico
            </span>
          </div>
        </div>

        {/* Skills grid — code block style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="border border-border rounded-lg bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* Card header */}
              <div className="px-5 py-4 border-b border-border bg-secondary/40">
                <div className="font-mono text-sm">
                  <span className="text-primary/70">const </span>
                  <span className="text-foreground font-semibold">
                    {category.key}
                  </span>
                  <span className="text-muted-foreground"> = [</span>
                </div>
              </div>

              {/* Skills */}
              <div className="px-5 py-4">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2 py-1 border border-primary/20 text-primary/80 bg-primary/5 rounded hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-150 cursor-default"
                    >
                      &quot;{skill}&quot;
                    </span>
                  ))}
                </div>
              </div>

              {/* Closing bracket */}
              <div className="px-5 pb-4">
                <span className="font-mono text-sm text-muted-foreground">
                  ]
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["CI/CD", "Seguridad en APIs", "Code Review", "Clean Code"].map(
            (badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-full font-mono text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                <span className="text-primary">//</span>
                {badge}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
