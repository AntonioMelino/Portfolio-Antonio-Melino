import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Gamer Zone App",
    description:
      "Tienda online de productos gamer desarrollada con React, Firebase y MUI. Permite explorar el catálogo, filtrar por categorías, gestionar el carrito y realizar compras. También la autenticación de usuarios.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765743839/GamerZoneApp-foto_ntqau6.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442488/GamerZoneApp-gif_eszq7w.gif",
    tags: ["React", "Material-UI", "Firebase"],
    demo: "https://gamer-zone-app.vercel.app/",
    github: "https://github.com/AntonioMelino/GamerZoneApp",
  },
  {
    title: "Verificador de fotos",
    description:
      "Aplicación para verificar fotos en auditorías: carga de imágenes, detección de desvíos y gestión de resultados. Incluye conversión PDF→JPG, filtrado aleatorio y exportación a Excel. Ideal para validaciones rápidas y precisas.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442668/EMA-foto_lgcpjo.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442779/EMA-gif_eqz9vg.gif",
    tags: ["HTML", "CSS", "Firebase"],
    demo: "https://verificador-de-fotos.web.app/",
    github: "https://github.com/AntonioMelino/AplicacionAuditoria",
  },
  {
    title: "Calculadora",
    description:
      "Calculadora de escritorio creada con C# (.NET y Windows Forms) que permite realizar operaciones básicas mediante una interfaz simple e intuitiva.",
    image:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442662/Calculadora-foto_qeao2n.jpg",
    gif: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1766442770/Calculadora-gif_yvudqw.gif",
    tags: ["C#", ".NET", "Windows Forms"],
    demo: "#",
    github: "https://github.com/AntonioMelino/Calculadora",
  },
  // {
  //   title: "Red Social para Desarrolladores",
  //   description:
  //     "Plataforma social para compartir código, proyectos y conectar con otros desarrolladores.",
  //   image: "/developer-social-network-feed.jpg",
  //   gif: "/social-feed-scroll-animation.jpg",
  //   tags: ["React", "Express", "GraphQL", "PostgreSQL"],
  //   demo: "#",
  //   github: "#",
  // },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">
            Proyectos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Trabajos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una selección de proyectos en los que he trabajado recientemente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain transition-opacity duration-300 group-hover:opacity-0 p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Image
                      src={project.gif || "/placeholder.svg"}
                      alt={`${project.title} animación`}
                      fill
                      className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Overlay para mejorar contraste de las imágenes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
