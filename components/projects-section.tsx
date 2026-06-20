"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ExternalLink, Images, Star } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SvgGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  gif: string;
  tags: string[];
  demo: string;
  github: string;
  gallery: string[];
  galleryMobile?: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Vencix",
    slug: "vencix",
    featured: true,
    description:
      "Sistema web interno fullstack para Maxiconsumo S.A. que centraliza el control de productos próximos a vencer con roles admin/empleado, autocompletado de 8.500 artículos por código de barras, notificaciones en tiempo real y PWA instalable. Gestionado con GitHub Projects.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781548344/Vencix_-_pantalla_de_inicio_xvsakp.png",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781548347/Vencix-gif_crbira.gif",
    tags: [
      "ASP.NET Core 10",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "JWT",
      "PWA",
      "Railway",
      "Vercel",
    ],
    demo: "#",
    github: "#",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781548344/Vencix_-_pantalla_de_inicio_xvsakp.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781548347/Vencix-gif_crbira.gif",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781830854/Vencix-_pantalla_de_estadisticas_jxl9eg.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781830855/Vencix_-_pantalla_de_recepcion_shm3ti.png",
    ],
    galleryMobile: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781983767/Vencix_-_pantalla_de_estadisticas_Mobile_gn0ove.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781983767/Vencix_-_pantalla_de_inicio_Mobile_z0mzob.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781983767/Vencix_-_pantalla_de_vencimientos_Mobile_fnmid3.jpg",
    ],
  },
  {
    title: "Techos Nass",
    slug: "techos_nass",
    description:
      "Web moderna y responsive para negocio de techos. Incluye Google Maps, opiniones de clientes y contacto directo vía WhatsApp.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767298290/Techos-Nass-foto_wtvu2e.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767299163/Techos-Nass-gif_me8rd1.gif",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "Vercel",
    ],
    demo: "https://techos-nass.vercel.app/",
    github: "https://github.com/AntonioMelino/TechosNass",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767298290/Techos-Nass-foto_wtvu2e.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767299163/Techos-Nass-gif_me8rd1.gif",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781830903/Techos_Nass_-_pantalla_de_opiniones_pkngno.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781830903/Techos_Nass_-_pantalla_de_contacto_k4m43m.png",
    ],
    galleryMobile: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781985963/Techos_Nass_-_pantalla_de_inicio_Mobile_xrenqh.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781985963/Techos_Nass_-_pantalla_de_maps_Mobile_s2q1q7.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781985962/Techos_Nass_-_pantalla_de_contacto_Mobile_sxf7bp.png",
    ],
  },
  {
    title: "Gamer Zone App",
    slug: "gamer_zone_app",
    description:
      "Tienda online de productos gamer con React, Firebase y MUI. Catálogo, filtros por categoría, carrito de compras y autenticación de usuarios.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765743839/GamerZoneApp-foto_ntqau6.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442488/GamerZoneApp-gif_eszq7w.gif",
    tags: ["React", "Material-UI", "Firebase", "JavaScript", "Vercel"],
    demo: "https://gamer-zone-app.vercel.app/",
    github: "https://github.com/AntonioMelino/GamerZoneApp",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765743839/GamerZoneApp-foto_ntqau6.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442488/GamerZoneApp-gif_eszq7w.gif",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781831222/Gamer_Zone_App_-_pantalla_de_detalle_spwlov.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781831223/Gamer_Zone_App_-_pantalla_de_carrito_lahk7p.png",
    ],
    galleryMobile: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781986052/Gamer_Zone_App_-_pantalla_de_inicio_Mobile_z8cpey.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781986051/Gamer_Zone_App_-_pantalla_de_detalle_Mobile_lbzoek.png",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1781986038/Gamer_Zone_App_-_pantalla_de_carrito_Mobile_xssq16.png",
    ],
  },
  {
    title: "Verificador de Fotos",
    slug: "verificador_fotos",
    description:
      "App para EMA Servicios de auditoría de imágenes: carga, detección de desvíos y gestión de resultados. Conversión PDF→JPG, filtrado aleatorio y exportación a Excel.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442668/EMA-foto_lgcpjo.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442779/EMA-gif_eqz9vg.gif",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    demo: "https://verificador-de-fotos.web.app/",
    github: "https://github.com/AntonioMelino/AplicacionAuditoria",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442668/EMA-foto_lgcpjo.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442779/EMA-gif_eqz9vg.gif",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442668/EMA-foto_lgcpjo.jpg",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isMobile = useIsMobile();

  const featuredProject = projects.find((p) => p.featured) ?? null;
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="py-24 px-6 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">
            // 06. projects/
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos</h2>
          <p className="text-lg text-muted-foreground">
            Una selección de proyectos en producción
          </p>
        </div>

        {/* Featured project */}
        {featuredProject && (
          <div className="mb-8">
            {/* Featured label */}
            <div className="flex items-center gap-2 mb-3">
              <p className="font-mono text-xs text-primary/60">
                // featured.project
              </p>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">
                <Star className="h-3 w-3 text-primary fill-primary" />
                <span className="font-mono text-[10px] text-primary">
                  proyecto destacado
                </span>
              </div>
            </div>

            <div
              onClick={() => setSelectedProject(featuredProject)}
              className="border border-primary/40 rounded-xl overflow-hidden group hover:border-primary/70 hover:shadow-[0_0_60px_rgba(0,212,255,0.15)] transition-all duration-300 bg-card cursor-pointer flex flex-col md:flex-row"
            >
              {/* Terminal bar — mobile only */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border md:hidden">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground truncate">
                    ./{featuredProject.slug}.tsx
                  </span>
                </div>
                <Star className="h-3.5 w-3.5 text-primary fill-primary opacity-70" />
              </div>

              {/* Image — left side on desktop */}
              <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-contain p-2 transition-opacity duration-300 group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Image
                  src={featuredProject.gif}
                  alt={`${featuredProject.title} demo`}
                  fill
                  className="object-contain p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-background/80 border border-border rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Images className="h-3 w-3 text-primary" />
                  <span className="font-mono text-[10px] text-primary">
                    galería
                  </span>
                </div>
              </div>

              {/* Content — right side on desktop */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                {/* Terminal bar — desktop only */}
                <div className="hidden md:flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground truncate">
                      ./{featuredProject.slug}.tsx
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">
                    <Star className="h-3 w-3 text-primary fill-primary" />
                    <span className="font-mono text-[10px] text-primary">
                      destacado
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 border border-primary/25 text-primary/70 bg-primary/5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {featuredProject.demo !== "#" && (
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono text-xs hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      demo()
                    </a>
                  )}
                  {featuredProject.github !== "#" && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-md font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                    >
                      <SvgGithub />
                      source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="border border-border rounded-xl overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_35px_rgba(0,212,255,0.1)] transition-all duration-300 bg-card cursor-pointer"
            >
              {/* Terminal window title bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-secondary border-b border-border">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground truncate">
                  ./{project.slug}.tsx
                </span>
              </div>

              {/* Image with hover GIF */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 transition-opacity duration-300 group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Image
                  src={project.gif}
                  alt={`${project.title} demo`}
                  fill
                  className="object-contain p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-background/80 border border-border rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Images className="h-3 w-3 text-primary" />
                  <span className="font-mono text-[10px] text-primary">
                    galería
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border border-primary/25 text-primary/70 bg-primary/5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono text-xs hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      demo()
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-md font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                    >
                      <SvgGithub />
                      source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-[100vw] sm:max-w-[100vw] w-screen h-auto max-h-[95vh] overflow-y-auto md:h-screen md:max-h-screen md:overflow-hidden rounded-none border-0 bg-card p-4 md:p-6 flex flex-col">
          {selectedProject && (
            <>
              <DialogHeader className="flex-shrink-0 mb-3">
                <DialogTitle className="font-mono text-lg text-primary">
                  ./{selectedProject.slug}.tsx
                </DialogTitle>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border border-primary/25 text-primary/70 bg-primary/5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogHeader>

              {/* Carousel */}
              <div className="flex-1 min-h-0 px-8">
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {(isMobile && selectedProject.galleryMobile?.length
                      ? selectedProject.galleryMobile
                      : selectedProject.gallery
                    ).map((src, index) => (
                      <CarouselItem key={index}>
                        <div
                          className={`relative w-full bg-muted rounded-lg overflow-hidden ${isMobile && selectedProject.galleryMobile?.length ? "aspect-[9/16] max-h-[55vh]" : "aspect-video md:aspect-auto md:h-[calc(100vh-220px)]"}`}
                        >
                          <Image
                            src={src}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary" />
                  <CarouselNext className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary" />
                </Carousel>
              </div>

              {/* Description + Links — footer compacto */}
              <div className="flex-shrink-0 mt-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <p className="text-sm text-muted-foreground leading-relaxed md:max-w-2xl">
                  {selectedProject.description}
                </p>
                <div className="flex gap-3 flex-shrink-0">
                  {selectedProject.demo !== "#" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono text-xs hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      demo()
                    </a>
                  )}
                  {selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-md font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                    >
                      <SvgGithub />
                      source
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
