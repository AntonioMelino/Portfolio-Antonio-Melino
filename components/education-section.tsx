"use client";

import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import Image from "next/image";

const educationData = [
  {
    institution: "Universidad Tecnológica Nacional",
    degree: "Tecnicatura Universitaria en Programación",
    period: "2021 - 2025",
    logo: "/logo UTN.jpg",
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
    logo: "/logo Coderhouse.jpg",
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
    <section id="educacion" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Educación y Formación
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            Mi trayectoria académica y certificaciones profesionales
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative animate-in fade-in slide-in-from-left-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Punto del timeline */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg z-10" />

                {/* Contenido - alterna izquierda/derecha en desktop */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="group relative bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Flecha hacia la línea del timeline (solo desktop) */}
                    <div
                      className={`hidden md:block absolute top-6 w-4 h-4 rotate-45 border-2 border-border bg-card ${
                        index % 2 === 0
                          ? "right-[-10px] border-l-0 border-b-0 group-hover:border-primary/50"
                          : "left-[-10px] border-r-0 border-t-0 group-hover:border-primary/50"
                      }`}
                    />

                    {/* Encabezado con logo */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Contenedor del logo */}
                        <div className="relative h-14 w-14 rounded-xl bg-white p-2 border border-gray-200 shadow-sm flex-shrink-0 overflow-hidden">
                          <div className="relative h-full w-full">
                            <Image
                              src={edu.logo}
                              alt={`Logo de ${edu.institution}`}
                              fill
                              className={`object-contain ${
                                edu.logoScale || "scale-100"
                              }`}
                              sizes="56px"
                              onError={(e) => {
                                // Fallback si el logo no carga
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 text-balance group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Award className="h-4 w-4" />
                            <span className="font-medium">
                              {edu.institution}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Descripción con línea estética */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm border-l-3 border-primary pl-4 py-1">
                      {edu.description}
                    </p>

                    {/* Logros/Certificaciones */}
                    <div className="space-y-2.5">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/40 hover:bg-muted transition-colors"
                        >
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
