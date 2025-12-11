"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 group"
            >
              <div className="bg-primary rounded-lg p-2 group-hover:scale-110 transition-transform">
                <Terminal className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Antonio Melino
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label="Cambiar tema"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label="Cambiar tema"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menú"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay y Contenido */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay para cerrar al tocar fuera */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menú móvil */}
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden animate-in slide-in-from-top-2">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => scrollToSection("experiencia")}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                >
                  Experiencia
                </button>
                <button
                  onClick={() => scrollToSection("habilidades")}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                >
                  Habilidades
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
