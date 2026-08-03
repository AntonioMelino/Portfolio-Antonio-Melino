"use client";

import Image from "next/image";
import { Code2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { CollapsibleAchievements } from "@/components/collapsible-achievements";

const experiences = [
  {
    company: "Freelance",
    position: "Desarrollador Full Stack",
    period: "Marzo 2026 – Presente",
    logo: null,
    logoScale: "",
    description:
      "Desarrollo aplicaciones web completas y full stack para clientes reales y uso interno, desde el diseño hasta el despliegue en producción.",
    achievements: [
      "Desarrollé Techos Nass, sitio institucional responsive y optimizado para SEO con integración de Google Maps, reseñas de clientes y contacto vía WhatsApp — finalizado y en producción.",
      "Desarrollé Vencix, aplicación interna full stack para Maxiconsumo S.A. con API REST, autenticación JWT y base de datos relacional.",
      "Backend con C#, .NET Core, ASP.NET y Java; frontend con React.js, JavaScript, HTML y CSS.",
      "Bases de datos relacionales y no relacionales (SQL Server, PostgreSQL, MySQL, Firebase Firestore) y despliegue con Docker en AWS, Vercel y Railway.",
      "Gestión directa de clientes: relevamiento de necesidades, estimación de esfuerzos y mantenimiento correctivo en producción.",
    ],
  },
  {
    company: "Maxiconsumo S.A.",
    position: "Operador de Sistemas",
    period: "Julio 2018 – Presente",
    logo: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500752/Logo_Maxiconsumo_zmgkh8.png",
    logoScale: "scale-200",
    description:
      "Gestión operativa del sistema interno para el control de mercadería, realizando ajustes de stock, emisión de remitos y análisis de movimientos.",
    achievements: [
      "Desarrollé Vencix, aplicación web fullstack interna que centraliza el control de vencimientos de toda la sucursal, reduciendo el riesgo de pérdidas por productos vencidos y mejorando la coordinación entre empleados.",
      "Opero diariamente el sistema interno (Java desktop) para registro de ingresos y egresos de mercadería.",
      "Gestiono ajustes de stock y remitos de devolución mediante software interno.",
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
      "Diseñé y desarrollé una app web para auditoría de imágenes con HTML, CSS y JavaScript — adoptada a nivel operativo.",
      "Procesé datos desde SQL y Excel, asegurando calidad e integridad de la información.",
      "Generé reportes analíticos para soporte en la toma de decisiones.",
      "Mapeo geográfico de direcciones de usuarios para análisis de distribución.",
    ],
  },
];

type Experience = (typeof experiences)[number];

interface ExperienceCardProps {
  exp: Experience;
  index: number;
  isMobile: boolean;
}

function ExperienceCard({ exp, index, isMobile }: ExperienceCardProps) {
  return (
    <div
      className="relative pl-10 sm:pl-16 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-2 sm:left-3 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

      {/* Card */}
      <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 group">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo */}
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-lg bg-white border border-border flex-shrink-0 overflow-hidden flex items-center justify-center">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={`Logo ${exp.company}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 48px, 64px"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <Code2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary dark:text-black" />
              )}
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
          {/* Date as comment — pill on mobile, plain text on desktop */}
          <span
            className={cn(
              "font-mono text-xs text-muted-foreground whitespace-nowrap inline-flex w-fit items-center",
              "rounded-full border border-border/60 bg-secondary/40 px-2 py-0.5",
              "sm:inline sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0",
            )}
          >
            // {exp.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 pl-4 border-l-2 border-primary/30">
          {exp.description}
        </p>

        {/* Achievements */}
        <CollapsibleAchievements
          achievements={exp.achievements}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const isMobile = useIsMobile();

  return (
    <section id="experiencia" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">
            // 04. experiencia.ts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiencia</h2>
          <p className="text-lg text-muted-foreground">
            Trayectoria profesional construyendo soluciones digitales
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
