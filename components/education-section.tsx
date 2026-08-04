"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { CollapsibleAchievements } from "@/components/collapsible-achievements";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/i18n/translations";

interface Bilingual {
  es: string;
  en: string;
}

const educationData: {
  institution: string;
  degree: Bilingual;
  period: Bilingual;
  logo: string;
  logoScale: string;
  description: Bilingual;
  achievements: Bilingual[];
}[] = [
  {
    institution: "Microsoft",
    degree: {
      es: "Certificado Profesional Full Stack Developer",
      en: "Certificado Profesional Full Stack Developer",
    },
    period: { es: "2026 – Actualidad", en: "2026 – Present" },
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1777340332/Logo_Microsoft_glrtwp.png",
    logoScale: "scale-150",
    description: {
      es: "Certificado profesional orientado al desarrollo full stack con el ecosistema .NET, enfocado en buenas prácticas, escalabilidad y entornos productivos.",
      en: "Professional certificate focused on full stack development within the .NET ecosystem, emphasizing best practices, scalability and production environments.",
    },
    achievements: [
      {
        es: "Soluciones escalables con .NET Core — rendimiento, seguridad y mantenibilidad.",
        en: "Scalable solutions with .NET Core — performance, security and maintainability.",
      },
      {
        es: "POO y arquitecturas modulares en C# con ASP.NET.",
        en: "OOP and modular architectures in C# with ASP.NET.",
      },
      {
        es: "Bases de datos relacionales con SQL Server y optimización de consultas.",
        en: "Relational databases with SQL Server and query optimization.",
      },
      {
        es: "Flujos CI/CD con Azure DevOps para automatizar despliegues.",
        en: "CI/CD pipelines with Azure DevOps to automate deployments.",
      },
      {
        es: "Contenerización con Docker y despliegue en Azure.",
        en: "Containerization with Docker and deployment on Azure.",
      },
      {
        es: "Control de versiones con Git y GitHub en flujos colaborativos.",
        en: "Version control with Git and GitHub in collaborative workflows.",
      },
    ],
  },
  {
    institution: "Universidad Nacional de San Martín",
    degree: {
      es: "Estudio de Idiomas — Inglés e Italiano",
      en: "Language Studies — English and Italian",
    },
    period: { es: "2026 – Actualidad", en: "2026 – Present" },
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1775431709/Logo_UNSAM_ed4n0n.png",
    logoScale: "scale-150",
    description: {
      es: "Formación en idiomas extranjeros con enfoque comunicativo y desarrollo de habilidades lingüísticas.",
      en: "Foreign language training with a communicative approach and language skills development.",
    },
    achievements: [
      { es: "Inglés — Nivel actual A1 (en curso).", en: "English — Current level A1 (in progress)." },
      { es: "Italiano — Nivel actual A1 (en curso).", en: "Italian — Current level A1 (in progress)." },
      {
        es: "Comprensión auditiva, lectura, expresión oral y escrita.",
        en: "Listening comprehension, reading, speaking and writing.",
      },
      {
        es: "Estructuras gramaticales y vocabulario básico en ambos idiomas.",
        en: "Grammar structures and basic vocabulary in both languages.",
      },
    ],
  },
  {
    institution: "Universidad Tecnológica Nacional",
    degree: {
      es: "Tecnicatura Universitaria en Programación",
      en: "University Degree in Software Programming",
    },
    period: { es: "2021 – 2025", en: "2021 – 2025" },
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500652/Logo_UTN_n1pri1.jpg",
    logoScale: "scale-150",
    description: {
      es: "Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
      en: "Comprehensive training in software development, systems architecture and technology project management.",
    },
    achievements: [
      {
        es: "Backend con C++, C# y Java en el ecosistema .NET.",
        en: "Backend with C++, C# and Java in the .NET ecosystem.",
      },
      {
        es: "Gestión de bases de datos relacionales (SQL, MySQL).",
        en: "Relational database management (SQL, MySQL).",
      },
      {
        es: "Proyectos en equipo con metodologías ágiles.",
        en: "Team projects using agile methodologies.",
      },
      { es: "Certificado en Desarrollo Web.", en: "Certificate in Web Development." },
      { es: "Certificado en C# y .NET.", en: "Certificate in C# and .NET." },
    ],
  },
  {
    institution: "Coderhouse",
    degree: { es: "Desarrollador Front-End", en: "Front-End Developer" },
    period: { es: "2022 – 2025", en: "2022 – 2025" },
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500707/Logo_Coderhouse_iya3mi.jpg",
    logoScale: "scale-150",
    description: {
      es: "Cursos especializados en tecnologías modernas de desarrollo web y mejores prácticas de la industria.",
      en: "Specialized courses in modern web development technologies and industry best practices.",
    },
    achievements: [
      {
        es: "Interfaces dinámicas y responsivas con HTML, CSS y JavaScript.",
        en: "Dynamic, responsive interfaces with HTML, CSS and JavaScript.",
      },
      { es: "React.js, Bootstrap y Material UI.", en: "React.js, Bootstrap and Material UI." },
      {
        es: "Proyectos profesionales con estándares web.",
        en: "Professional projects following web standards.",
      },
      { es: "Certificado en React JS.", en: "Certificate in React JS." },
      { es: "Certificado en JavaScript.", en: "Certificate in JavaScript." },
    ],
  },
];

export function EducationSection() {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="educacion" className="py-24 px-6 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">{t.education.fileComment}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.education.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              {/* Package-style header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-lg bg-white border border-border flex-shrink-0 overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={`Logo ${edu.institution}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 48px, 64px"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary font-semibold leading-tight">
                      {edu.institution}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      // {edu.period[language]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Degree */}
              <h3 className="text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {edu.degree[language]}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed pl-3 border-l-2 border-primary/30">
                {edu.description[language]}
              </p>

              {/* Achievements */}
              <CollapsibleAchievements
                achievements={edu.achievements.map((a) => a[language])}
                isMobile={isMobile}
                listClassName="space-y-1.5"
                bulletClassName="font-mono text-primary mt-0.5 flex-shrink-0 text-xs"
                textClassName="text-muted-foreground text-xs leading-relaxed"
                extraItemsTopClassName="pt-1.5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
