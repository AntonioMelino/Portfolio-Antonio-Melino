"use client";

import { useState, useEffect } from "react";
import { Download, ArrowRight, Mail } from "lucide-react";

const SvgGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072C2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
import { Button } from "@/components/ui/button";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "React & Next.js Dev",
  ".NET & C# Dev",
  "APIs RESTful & JWT",
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const delay = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* Radial gradient fade */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-background pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text content */}
          <div className="space-y-6 animate-fade-up">
            {/* File label */}
            <p className="font-mono text-xs text-primary/60">// hero.tsx</p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 rounded-full bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary">
                disponible para nuevos proyectos
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Antonio{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-300 dark:from-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  Melino
                </span>
              </h1>
            </div>

            {/* Typing role */}
            <div className="flex items-center gap-2 h-9">
              <span className="font-mono text-primary/50 text-sm select-none">
                $
              </span>
              <span className="font-mono text-xl md:text-2xl font-semibold text-foreground">
                {displayText}
              </span>
              <span className="font-mono text-primary text-2xl cursor-blink leading-none">
                ▌
              </span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Desarrollador con base académica y enfoque autodidacta, motivado
              por crecer y aportar en el entorno IT.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("proyectos")}
                className="group font-mono gap-2"
              >
                ver_proyectos()
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="/Antonio__Melino__CV.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="group font-mono gap-2 border-border hover:border-primary/60 bg-transparent"
                >
                  <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  descargar_cv
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-1 pt-2">
              {[
                {
                  href: "https://github.com/AntonioMelino",
                  icon: <SvgGithub />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/antonio-melino-82a885213/",
                  icon: <SvgLinkedin />,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/tony.melino/",
                  icon: <SvgInstagram />,
                  label: "Instagram",
                },
                {
                  href: "mailto:antoniomelino1997@gmail.com",
                  icon: <Mail className="h-4 w-4" />,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-md border border-border hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-200 hover:bg-primary/5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo with editor frame */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "200ms", opacity: 0 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl pointer-events-none" />

              {/* Editor window */}
              <div className="relative border border-border rounded-xl overflow-hidden shadow-2xl bg-card">
                {/* Title bar */}
                <div className="flex items-center gap-3 px-4 py-3 bg-secondary border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 ml-2 px-3 py-1 bg-background rounded text-xs font-mono text-muted-foreground border border-border/50">
                    <span className="text-primary">antonio</span>
                    <span>.tsx</span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhwsxp2c8/image/upload/v1778549663/Foto_CV-Antonio-Melino_lulu5q.jpg"
                    alt="Antonio Melino - Desarrollador Full Stack"
                    width={500}
                    height={625}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                    <p className="font-mono text-xs text-primary/70 mb-1">
                      // developer.info
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      Antonio Melino
                    </h3>
                    <p className="font-mono text-white/60 text-xs mt-0.5">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-secondary border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      TypeScript
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    UTF-8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-muted-foreground">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
