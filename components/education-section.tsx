"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const educationData = [
  {
    institution: "Microsoft",
    degree: "Certificado Profesional Full Stack Developer",
    period: "2026 - Actualidad",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1777340332/Logo_Microsoft_glrtwp.png",
    logoScale: "scale-150",
    description:
      "Certificado profesional orientado al desarrollo full stack con el ecosistema .NET, enfocado en buenas prácticas, escalabilidad y entornos productivos.",
    achievements: [
      "Diseño e implementación de soluciones escalables con .NET Core, garantizando rendimiento, seguridad y mantenibilidad.",
      "Aplicación de principios de POO para construir arquitecturas modulares en C# con ASP.NET.",
      "Gestión de bases de datos relacionales con SQL Server y optimización de consultas.",
      "Implementación de flujos CI/CD con Azure DevOps para automatizar despliegues y gestionar el ciclo de desarrollo.",
      "Contenerización de aplicaciones con Docker y despliegue en Azure.",
      "Control de versiones con Git y GitHub en flujos de trabajo colaborativos.",
    ],
  },
  {
    institution: "Universidad Nacional de San Martín",
    degree: "Estudio de Idiomas - Inglés e Italiano",
    period: "2026 - Actualidad",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1775431709/Logo_UNSAM_ed4n0n.png",
    logoScale: "scale-150",
    description:
      "Formación en idiomas extranjeros con enfoque comunicativo y desarrollo de habilidades lingüísticas.",
    achievements: [
      "Inglés - Nivel actual A1 (en curso).",
      "Italiano - Nivel actual A1 (en curso).",
      "Desarrollo de competencias en comprensión auditiva, lectura, expresión oral y escrita.",
      "Estudio de estructuras gramaticales y vocabulario básico en ambos idiomas.",
    ],
  },
  {
    institution: "Universidad Tecnológica Nacional",
    degree: "Tecnicatura Universitaria en Programación",
    period: "2021 - 2025",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500652/Logo_UTN_n1pri1.jpg",
    logoScale: "scale-150",
    description:
      "Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
    achievements: [
      "Especialización en desarrollo backend con dominio de lenguajes como C++, C# y Java.",
      "Experiencia práctica con el framework .NET y gestión de bases de datos relacionales (SQL, MySQL).",
      "Desarrollo de múltiples proyectos en equipo, fomentando habilidades de colaboración, comunicación y metodologías ágiles.",
      "Adquisición de inglés técnico para la documentación y comprensión de especificaciones de software.",
      "Certificado en Desarrollo Web.",
      "Certificado en C# y .NET.",
    ],
  },
  {
    institution: "Coderhouse",
    degree: "Desarrollador Front-End",
    period: "2022 - 2025",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500707/Logo_Coderhouse_iya3mi.jpg",
    logoScale: "scale-150",
    description:
      "Cursos especializados en tecnologías modernas de desarrollo web y las mejores prácticas de la industria.",
    achievements: [
      "Enfoque en desarrollo frontend, creando interfaces de usuario dinámicas y responsivas con HTML, CSS y JavaScript.",
      "Experiencia en el uso de bibliotecas y frameworks modernos como React.js, Bootstrap y Material UI.",
      "Desarrollo de proyectos profesionales aplicando las mejores prácticas de la industria y estándares web.",
      "Certificado en Desarrollo Web.",
      "Certificado en JavaScript.",
      "Certificado en React JS.",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">
            Educación & Formación
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Trayectoria Académica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi recorrido académico y certificaciones profesionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border-2 border-transparent hover:border-primary/20 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header: logo + institución + icono */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-lg bg-white p-1.5 border border-gray-200 shadow-sm flex-shrink-0 overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={`Logo de ${edu.institution}`}
                      fill
                      className={`object-contain ${edu.logoScale || "scale-100"}`}
                      sizes="48px"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary leading-tight">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Título del grado */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {edu.degree}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed border-l-3 border-primary pl-4 py-1">
                {edu.description}
              </p>

              {/* Logros */}
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
