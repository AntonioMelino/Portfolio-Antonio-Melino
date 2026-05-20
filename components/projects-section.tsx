import { ExternalLink } from "lucide-react";

const SvgGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
import Image from "next/image";

const projects = [
  {
    title: "Gamer Zone App",
    slug: "gamer_zone_app",
    description:
      "Tienda online de productos gamer con React, Firebase y MUI. Catálogo, filtros por categoría, carrito de compras y autenticación de usuarios.",
    image: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765743839/GamerZoneApp-foto_ntqau6.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442488/GamerZoneApp-gif_eszq7w.gif",
    tags: ["React", "Material-UI", "Firebase", "JavaScript", "Vercel"],
    demo: "https://gamer-zone-app.vercel.app/",
    github: "https://github.com/AntonioMelino/GamerZoneApp",
  },
  {
    title: "Techos Nass",
    slug: "techos_nass",
    description:
      "Web moderna y responsive para negocio de techos. Incluye Google Maps, opiniones de clientes y contacto directo vía WhatsApp.",
    image: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767298290/Techos-Nass-foto_wtvu2e.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767299163/Techos-Nass-gif_me8rd1.gif",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Vercel"],
    demo: "https://techos-nass.vercel.app/",
    github: "https://github.com/AntonioMelino/TechosNass",
  },
  {
    title: "Verificador de Fotos",
    slug: "verificador_fotos",
    description:
      "App para auditoría de imágenes: carga, detección de desvíos y gestión de resultados. Conversión PDF→JPG, filtrado aleatorio y exportación a Excel.",
    image: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442668/EMA-foto_lgcpjo.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442779/EMA-gif_eqz9vg.gif",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    demo: "https://verificador-de-fotos.web.app/",
    github: "https://github.com/AntonioMelino/AplicacionAuditoria",
  },
  {
    title: "Calculadora",
    slug: "calculadora_net",
    description:
      "Calculadora de escritorio creada con C# (.NET y Windows Forms) con operaciones básicas e interfaz simple e intuitiva.",
    image: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442662/Calculadora-foto_qeao2n.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442770/Calculadora-gif_yvudqw.gif",
    tags: ["C#", ".NET", "Windows Forms"],
    demo: "#",
    github: "https://github.com/AntonioMelino/Calculadora",
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-6 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">// 06. projects/</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-muted-foreground">
            Una selección de proyectos en producción
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-xl overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_35px_rgba(0,212,255,0.1)] transition-all duration-300 bg-card"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono text-xs hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      demo()
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-md font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <SvgGithub />
                    source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
