import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Gamer Zone App",
    description:
      "Esta es una tienda en línea especializada en productos gamer, desarrollada con React, Firebase y Material-UI (MUI). En esta plataforma, los usuarios pueden explorar un catálogo de productos, filtrar por categorías, agregar productos al carrito y realizar compras de manera segura. Además, próximamente se integrará un sistema de autenticación con perfiles de usuario.",
    image: "/ProyectReact.jpeg",
    gif: "/gifProyectReact.gif",
    tags: ["React", "Material-UI", "Firebase"],
    demo: "https://gamer-zone-app.vercel.app/",
    github: "https://github.com/AntonioMelino/GamerZoneApp",
  },
  {
    title: "Verificador de fotos",
    description:
      "Esta aplicación está diseñada para facilitar la verificación de fotos en auditorías, permitiendo a los usuarios cargar imágenes, identificar desvíos o irregularidades, y gestionar los resultados de manera eficiente. Además, ofrece funcionalidades avanzadas como la conversión de archivos PDF a JPG, filtrado aleatorio de imagenes y la exportación de datos a Excel. Es una herramienta ideal para profesionales que necesitan validar y auditar imágenes de manera rápida y precisa.",
    image: "/foto EMA.jpeg",
    gif: "/gif EMA.gif",
    tags: ["HTML", "CSS", "Firebase"],
    demo: "https://verificador-de-fotos.web.app/",
    github: "https://github.com/AntonioMelino/AplicacionAuditoria",
  },
  {
    title: "Calculadora",
    description:
      "Este proyecto consiste en el desarrollo de una calculadora de escritorio creada con C# utilizando el framework .NET y Windows Forms. La aplicación permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división mediante una interfaz gráfica intuitiva y amigable para el usuario.",
    image: "/foto Calculadora.jpeg",
    gif: "/gif Calculadora.gif",
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
    <section id="proyectos" className="py-20 px-4">
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
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={project.gif || "/placeholder.svg"}
                  alt={`${project.title} animación`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
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
