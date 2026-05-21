"use client";

import Image from "next/image";

const educationData = [
  {
    institution: "Microsoft",
    degree: "Certificado Profesional Full Stack Developer",
    period: "2026 – Actualidad",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1777340332/Logo_Microsoft_glrtwp.png",
    logoScale: "scale-150",
    description:
      "Certificado profesional orientado al desarrollo full stack con el ecosistema .NET, enfocado en buenas prácticas, escalabilidad y entornos productivos.",
    achievements: [
      "Soluciones escalables con .NET Core — rendimiento, seguridad y mantenibilidad.",
      "POO y arquitecturas modulares en C# con ASP.NET.",
      "Bases de datos relacionales con SQL Server y optimización de consultas.",
      "Flujos CI/CD con Azure DevOps para automatizar despliegues.",
      "Contenerización con Docker y despliegue en Azure.",
      "Control de versiones con Git y GitHub en flujos colaborativos.",
    ],
  },
  {
    institution: "Universidad Nacional de San Martín",
    degree: "Estudio de Idiomas — Inglés e Italiano",
    period: "2026 – Actualidad",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1775431709/Logo_UNSAM_ed4n0n.png",
    logoScale: "scale-150",
    description:
      "Formación en idiomas extranjeros con enfoque comunicativo y desarrollo de habilidades lingüísticas.",
    achievements: [
      "Inglés — Nivel actual A1 (en curso).",
      "Italiano — Nivel actual A1 (en curso).",
      "Comprensión auditiva, lectura, expresión oral y escrita.",
      "Estructuras gramaticales y vocabulario básico en ambos idiomas.",
    ],
  },
  {
    institution: "Universidad Tecnológica Nacional",
    degree: "Tecnicatura Universitaria en Programación",
    period: "2021 – 2025",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500652/Logo_UTN_n1pri1.jpg",
    logoScale: "scale-150",
    description:
      "Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
    achievements: [
      "Backend con C++, C# y Java en el ecosistema .NET.",
      "Gestión de bases de datos relacionales (SQL, MySQL).",
      "Proyectos en equipo con metodologías ágiles.",
      "Certificado en Desarrollo Web.",
      "Certificado en C# y .NET.",
    ],
  },
  {
    institution: "Coderhouse",
    degree: "Desarrollador Front-End",
    period: "2022 – 2025",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500707/Logo_Coderhouse_iya3mi.jpg",
    logoScale: "scale-150",
    description:
      "Cursos especializados en tecnologías modernas de desarrollo web y mejores prácticas de la industria.",
    achievements: [
      "Interfaces dinámicas y responsivas con HTML, CSS y JavaScript.",
      "React.js, Bootstrap y Material UI.",
      "Proyectos profesionales con estándares web.",
      "Certificado en React JS.",
      "Certificado en JavaScript.",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="educacion" className="py-24 px-6 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">// 04. education.json</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educación
          </h2>
          <p className="text-lg text-muted-foreground">
            Trayectoria académica y certificaciones profesionales
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
                  <div className="relative h-16 w-16 rounded-lg bg-white border border-border flex-shrink-0 overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={`Logo ${edu.institution}`}
                      fill
                      className="object-contain"
                      sizes="64px"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary font-semibold leading-tight">
                      {edu.institution}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      // {edu.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Degree */}
              <h3 className="text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {edu.degree}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed pl-3 border-l-2 border-primary/30">
                {edu.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-1.5">
                {edu.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="font-mono text-primary mt-0.5 flex-shrink-0 text-xs">▸</span>
                    <span className="text-muted-foreground text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
