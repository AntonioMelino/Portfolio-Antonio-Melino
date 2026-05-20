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

const capabilityCards = [
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Frontend Moderno",
    badge: "Especialidad",
    description:
      "React, Next.js, TypeScript, Tailwind CSS. Interfaces intuitivas y accesibles con deploys en Vercel.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Backend Sólido",
    description:
      "Ecosistema Microsoft con .NET y C#, APIs RESTful con autenticación JWT, Firebase y SQL.",
    tags: [".NET", "C#", "Firebase", "SQL", "JWT"],
  },
  {
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "DevOps & Cloud",
    description:
      "Deploy continuo con Vercel y Firebase, contenedores Docker, familiaridad con AWS y Azure.",
    tags: ["Docker", "Vercel", "AWS", "Azure", "CI/CD"],
  },
];

const valueCards = [
  {
    icon: <Bot className="h-5 w-5 text-primary" />,
    title: "IA integrada al flujo",
    description:
      "Claude Code, GitHub Copilot y otras herramientas de IA directamente en el IDE para desarrollar más rápido.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-primary" />,
    title: "Orientado a resultados",
    description:
      "Proyectos con deploy real y funcionalidad completa. En mi trabajo automaticé tareas que me dieron visión de procesos.",
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: "Colaborador y metódico",
    description:
      "Experiencia con Agile y Scrum. Enfoque en estructura, legibilidad y mantenibilidad del código en equipo.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">// 01. about_me.tsx</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Formación sólida, proyectos reales y experiencia en entornos laborales tecnológicos
          </p>
        </div>

        {/* Two-column: story + cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="font-mono text-primary text-sm">{"{"}</span>
                Mi Historia
                <span className="font-mono text-primary text-sm">{"}"}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trabajo con tecnología desde hace años en entornos laborales reales, lo que me dio
                una perspectiva práctica que va más allá del código: entender procesos, detectar
                problemas y proponer soluciones concretas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Paralelamente fui construyendo mi stack como desarrollador full stack a través de la
                UTN, Coderhouse, certificaciones Microsoft y proyectos propios llevados a producción.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {[
                {
                  icon: <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />,
                  title: "Mi Objetivo",
                  text: "Integrarme a un equipo donde pueda aportar desde el día uno, colaborar con profesionales de alto nivel y seguir creciendo como desarrollador full stack.",
                },
                {
                  icon: <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />,
                  title: "En Constante Evolución",
                  text: "Actualmente cursando el Certificado Profesional Microsoft Full-Stack Developer, con foco en .NET Core, Azure, CI/CD y arquitecturas escalables.",
                },
                {
                  icon: <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />,
                  title: "Soft Skills",
                  text: "Comunicación efectiva, resolución de problemas, trabajo en equipo y adaptabilidad.",
                },
              ].map(({ icon, title, text }) => (
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
          <p className="font-mono text-xs text-primary/60 mb-3">// lo_que_me_define</p>
          <h3 className="text-2xl font-bold mb-8">Lo que me define</h3>
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
            ¿Buscás un desarrollador full stack con formación sólida, proyectos en producción y visión de negocio?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Sparkles className="h-4 w-4" />
            hablemos()
          </a>
        </div>
      </div>
    </section>
  );
}
