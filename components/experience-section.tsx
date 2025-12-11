"use client";

import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const experiences = [
  {
    company: "Maxiconsumo S.A.",
    position: "Operador de sistemas",
    period: "Julio 2018 - Presente",
    logo: "/Diseño sin título.png",
    logoScale: "scale-200",
    description:
      "Encargado de la gestión operativa del sistema interno para el control de mercadería, realizando ajustes de stock, emisión de remitos y análisis de movimientos mediante herramientas administrativas y Excel.",
    achievements: [
      "Operación diaria de sistema interno (Java desktop) para registro de ingresos y egresos de mercadería.",
      "Gestión de ajustes de stock y remitos de devolución mediante software interno.",
      "Manejo avanzado de Excel para control de cargas y análisis de movimientos.",
      "Experiencia en atención al cliente, combinando trato directo con gestión administrativa.",
    ],
  },
  {
    company: "EMA Servicios",
    position: "Analista de datos",
    period: "Octubre 2024 - Octubre 2025",
    logo: "/Diseño sin título2.png",
    logoScale: "scale-150",
    description:
      "Desarrollo de soluciones web personalizadas para el sistema interno. Trabajo en equipo con usuarios y personal.",
    achievements: [
      "Desarrollo de una aplicación web para la auditoría de fotos, implementando HTML, CSS y JavaScript para la gestión y validación de imágenes.",
      "Recopilación de datos desde bases de datos.",
      "Análisis y organización de datos en Excel.",
      "Generación de reportes analíticos.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            Mi trayectoria profesional construyendo soluciones digitales
            innovadoras
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  {/* Contenedor con logo y título */}
                  <div className="flex items-start gap-4">
                    {/* Contenedor adaptable del logo */}
                    <div className="relative h-14 w-14 rounded-lg bg-white p-2 border border-gray-200 shadow-sm flex-shrink-0 overflow-hidden">
                      <div className="relative h-full w-full">
                        <Image
                          src={exp.logo}
                          alt={`Logo de ${exp.company}`}
                          fill
                          className={`object-contain ${
                            exp.logoScale || "scale-100"
                          }`}
                          sizes="56px"
                          onError={(e) => {
                            // Fallback si el logo no carga
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Fecha */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Descripción con línea estética a la izquierda */}
                <p className="text-muted-foreground mb-6 leading-relaxed border-l-3 border-primary pl-4 py-1">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
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
