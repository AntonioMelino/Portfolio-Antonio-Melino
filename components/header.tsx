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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
