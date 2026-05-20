"use client";

import Image from "next/image";

const experiences = [
  {
    company: "Maxiconsumo S.A.",
    position: "Operador de Sistemas",
    period: "Julio 2018 – Presente",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500752/Logo_Maxiconsumo_zmgkh8.png",
    logoScale: "scale-200",
    description:
      "Gestión operativa del sistema interno para el control de mercadería, realizando ajustes de stock, emisión de remitos y análisis de movimientos.",
    achievements: [
      "Operación diaria de sistema interno (Java desktop) para registro de ingresos y egresos de mercadería.",
      "Gestión de ajustes de stock y remitos de devolución mediante software interno.",
      "Manejo avanzado de Excel para control de cargas y análisis de movimientos.",
      "Atención al cliente combinando trato directo con gestión administrativa.",
    ],
  },
  {
    company: "EMA Servicios",
    position: "Analista de Datos",
    period: "Octubre 2024 – Octubre 2025",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500760/Logo_EMA_ydsmtp.png",
    logoScale: "scale-150",
    description:
      "Desarrollo de soluciones web personalizadas para el sistema interno. Trabajo en equipo con usuarios y personal.",
    achievements: [
      "Diseño y desarrollo de una app web para auditoría de imágenes con HTML, CSS y JavaScript — adoptada a nivel operativo.",
      "Procesamiento de datos desde SQL y Excel, asegurando calidad e integridad de la información.",
      "Generación de reportes analíticos para soporte en la toma de decisiones.",
      "Mapeo geográfico de direcciones de usuarios para análisis de distribución.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">// 03. experience.ts</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiencia
          </h2>
          <p className="text-lg text-muted-foreground">
            Trayectoria profesional construyendo soluciones digitales
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16 animate-fade-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                {/* Timeline dot */}
                <div className="absolute left-3 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

                {/* Card */}
                <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 group">

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div className="relative h-12 w-12 rounded-lg bg-white p-1.5 border border-border flex-shrink-0 overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`Logo ${exp.company}`}
                          fill
                          className={`object-contain ${exp.logoScale}`}
                          sizes="48px"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <p className="font-mono text-sm text-primary/70 mt-0.5">
                          @ {exp.company}
                        </p>
                      </div>
                    </div>
                    {/* Date as comment */}
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      // {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 pl-4 border-l-2 border-primary/30">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="font-mono text-primary mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
