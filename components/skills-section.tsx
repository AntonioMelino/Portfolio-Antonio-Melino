"use client";

import { Globe } from "lucide-react";
import { FlagES, FlagGB } from "@/components/flag-icons";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/i18n/translations";

type SkillLevel = "core" | "familiar";

interface Skill {
  name: { es: string; en: string };
  level: SkillLevel;
}

const core = (nameEs: string, nameEn?: string): Skill => ({
  name: { es: nameEs, en: nameEn ?? nameEs },
  level: "core",
});
const familiar = (nameEs: string, nameEn?: string): Skill => ({
  name: { es: nameEs, en: nameEn ?? nameEs },
  level: "familiar",
});

const skillCategories = [
  {
    key: "frontend",
    skills: [
      core("React"),
      core("Next.js"),
      core("JavaScript"),
      core("TypeScript"),
      core("HTML5"),
      core("CSS3"),
      core("Tailwind CSS"),
      core("Bootstrap"),
      core("Material UI"),
      core("Responsive Design"),
    ],
  },
  {
    key: "backend",
    skills: [
      core("C#"),
      core(".NET"),
      familiar("Java"),
      familiar("C++"),
      core("Node.js"),
      core("Express.js"),
      core("REST APIs / RESTful"),
      core("JWT / Autenticación", "JWT / Authentication"),
    ],
  },
  {
    key: "database",
    skills: [
      core("PostgreSQL (Supabase)"),
      familiar("Firebase (Firestore)"),
      core("SQL"),
      familiar("MySQL"),
      core("Entity Framework (ORM)"),
    ],
  },
  {
    key: "devops",
    skills: [
      core("Git"),
      core("GitHub"),
      core("Vercel"),
      familiar("Docker"),
      familiar("AWS"),
      familiar("Azure"),
      core("Railway"),
    ],
  },
  {
    key: "ai",
    skills: [
      core("Claude Code"),
      familiar("DeepSeek"),
      familiar("GitHub Copilot"),
      core("Kimi AI"),
    ],
  },
  {
    key: "soft",
    skills: [
      core("Agile"),
      core("Scrum"),
      core("GitHub Projects"),
      core("POO", "OOP"),
      core("Trabajo colaborativo", "Team collaboration"),
      core("Resolución de problemas", "Problem solving"),
    ],
  },
];

export function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="habilidades" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">
            {t.skills.fileComment}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.skills.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 max-w-full px-3 py-1.5 border border-border rounded-full bg-secondary/50">
            <Globe size={13} className="text-primary shrink-0" />
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <FlagES />
                {t.skills.nativeLang}
              </span>
              <span className="text-muted-foreground/50" aria-hidden="true">
                |
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <FlagGB />
                {t.skills.technicalLang}
              </span>
            </div>
          </div>
        </div>

        {/* Skills grid — code block style */}
        <div className="grid min-[400px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => {
            const coreSkills = category.skills.filter(
              (skill) => skill.level === "core",
            );
            const familiarSkills = category.skills.filter(
              (skill) => skill.level === "familiar",
            );

            return (
              <div
                key={category.key}
                className="border border-border rounded-lg bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 overflow-hidden"
              >
                {/* Card header */}
                <div className="px-5 py-3 sm:py-4 border-b border-border bg-secondary/40">
                  <div className="font-mono text-sm">
                    <span className="text-primary/70">const </span>
                    <span className="text-foreground font-semibold">
                      {category.key}
                    </span>
                    <span className="text-muted-foreground"> = [</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="px-5 py-3 sm:py-4 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {coreSkills.map((skill) => (
                      <span
                        key={skill.name.es}
                        className="font-mono text-xs px-2 py-1 border border-primary/20 text-primary/80 bg-primary/5 rounded hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-150 cursor-default"
                      >
                        &quot;{skill.name[language]}&quot;
                      </span>
                    ))}
                  </div>

                  {familiarSkills.length > 0 && (
                    <div>
                      <p className="font-mono text-[11px] text-muted-foreground/60 mb-1.5">
                        {t.skills.knowledgeComment}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {familiarSkills.map((skill) => (
                          <span
                            key={skill.name.es}
                            className="font-mono text-xs px-2 py-1 border border-dashed border-border text-muted-foreground/60 rounded hover:border-primary/30 hover:text-muted-foreground transition-all duration-150 cursor-default"
                          >
                            &quot;{skill.name[language]}&quot;
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Closing bracket */}
                <div className="px-5 pb-3 sm:pb-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    ]
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {t.skills.extraBadges.map(
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
