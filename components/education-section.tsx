"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    institution: "Universidad Tecnológica",
    degree: "Ingeniería en Sistemas Computacionales",
    period: "2015 - 2019",
    description:
      "Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
    achievements: [
      "Graduado con honores - Promedio: 9.2/10",
      "Proyecto de tesis sobre Machine Learning aplicado",
      "Certificación en Desarrollo Web Full Stack",
    ],
  },
  {
    institution: "Platzi",
    degree: "Escuela de Desarrollo Web",
    period: "2019 - 2020",
    description:
      "Cursos especializados en tecnologías modernas de desarrollo web y mejores prácticas de la industria.",
    achievements: [
      "Certificación en React y Next.js",
      "Curso avanzado de Node.js y bases de datos",
      "Especialización en arquitectura de software",
    ],
  },
  {
    institution: "FreeCodeCamp",
    degree: "Full Stack Development",
    period: "2018 - 2019",
    description:
      "Programa intensivo de 1,800+ horas cubriendo frontend, backend, y estructuras de datos.",
    achievements: [
      "Certificación en Responsive Web Design",
      "Certificación en JavaScript Algorithms",
      "Certificación en Front End Development Libraries",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="educacion" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Educación y Formación
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            Mi trayectoria académica y certificaciones profesionales
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="h-4 w-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
