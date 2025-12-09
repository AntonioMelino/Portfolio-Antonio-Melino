"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Disponible para nuevos proyectos
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              Hola, soy{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Antonio Melino
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Desarrollador Full Stack
            </p>

            <p className="text-base md:text-lg text-muted-foreground text-balance mb-8 max-w-xl leading-relaxed">
              Soy un desarrollador con base académica y enfoque autodidacta,
              motivado por crecer y aportar en el entorno IT.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => scrollToSection("proyectos")}
                className="group"
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="/Antonio Melino - CV.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Descargar CV
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://github.com/AntonioMelino"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/antonio-melino-82a885213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.instagram.com/tony.melino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:antoniomelino1997@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Foto CV - Antonio Melino - copia.jpg"
                  alt="Antonio Melino - Desarrollador Full Stack"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Overlay con información */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    Antonio Melino
                  </h3>
                  <p className="text-white/90 text-sm">
                    Desarrollador Full Stack
                  </p>
                </div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
