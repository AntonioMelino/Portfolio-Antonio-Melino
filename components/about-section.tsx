"use client";

import {
  Code2,
  Database,
  Cloud,
  Bot,
  Rocket,
  Users,
  Target,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/i18n/translations";

const capabilityIcons = [
  <Code2 key="frontend" className="h-6 w-6 text-primary" />,
  <Database key="backend" className="h-6 w-6 text-primary" />,
  <Cloud key="devops" className="h-6 w-6 text-primary" />,
];

const capabilityTags = [
  ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  [".NET", "C#", "Firebase", "SQL", "JWT"],
  ["Docker", "Vercel", "AWS", "Azure", "CI/CD"],
];

const valueIcons = [
  <Bot key="ai" className="h-5 w-5 text-primary" />,
  <Rocket key="results" className="h-5 w-5 text-primary" />,
  <Users key="team" className="h-5 w-5 text-primary" />,
];

const objectiveIcons = [
  <Target key="goal" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />,
  <BookOpen key="evolving" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />,
  <Users key="soft" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />,
];

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const capabilityCards = t.about.capabilityCards.map((card, i) => ({
    ...card,
    icon: capabilityIcons[i],
    tags: capabilityTags[i],
    badge: i === 0 ? t.about.specialtyBadge : undefined,
  }));

  const valueCards = t.about.valueCards.map((card, i) => ({
    ...card,
    icon: valueIcons[i],
  }));

  const objectives = t.about.objectives.map((item, i) => ({
    ...item,
    icon: objectiveIcons[i],
  }));

  return (
    <section id="sobre-mi" className="py-24 px-6 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">{t.about.fileComment}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Two-column: story + cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="font-mono text-primary text-sm">{"{"}</span>
                {t.about.storyHeading}
                <span className="font-mono text-primary text-sm">{"}"}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.about.storyP1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.storyP2}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {objectives.map(({ icon, title, text }) => (
                <div key={title} className="flex items-start gap-3 pl-4 border-l border-primary/30">
                  {icon}
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capability cards */}
          <div className="flex flex-col gap-4">
            {capabilityCards.map((card) => (
              <div
                key={card.title}
                className="border border-border rounded-lg p-5 bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-base">{card.title}</h3>
                      {card.badge && (
                        <span className="font-mono text-xs border border-primary/40 text-primary px-2 py-0.5 rounded-full">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {card.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-0.5 border border-primary/25 text-primary/80 bg-primary/5 rounded hover:border-primary/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-border pt-14">
          <p className="font-mono text-xs text-primary/60 mb-3">{t.about.definesFileComment}</p>
          <h3 className="text-2xl font-bold mb-8">{t.about.definesHeading}</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4">
                  {card.icon}
                </div>
                <h4 className="font-bold mb-2">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 pt-10 border-t border-border">
          <p className="text-muted-foreground mb-6">
            {t.about.ctaText}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Sparkles className="h-4 w-4" />
            {t.about.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
