"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { id: "hero",        label: "inicio",      num: "01" },
  { id: "sobre-mi",   label: "sobre_mi",    num: "02" },
  { id: "experiencia", label: "experiencia", num: "03" },
  { id: "educacion",  label: "educacion",   num: "04" },
  { id: "habilidades", label: "skills",      num: "05" },
  { id: "proyectos",  label: "proyectos",   num: "06" },
  { id: "contacto",   label: "contacto",    num: "07" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
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
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-0 group"
              aria-label="Ir al inicio"
            >
              <span className="font-mono text-sm">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">antonio</span>
                <span className="text-primary">@dev</span>
                <span className="text-muted-foreground">:~</span>
                <span className="text-foreground">$</span>
                <span className="text-primary cursor-blink ml-0.5">▌</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(({ id, label, num }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="group flex items-center gap-1 text-sm transition-colors hover:text-primary text-muted-foreground"
                >
                  <span className="font-mono text-xs text-primary/50 group-hover:text-primary/90 transition-colors">
                    {num}.
                  </span>
                  <span className="font-mono">{label}</span>
                </button>
              ))}

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-md border border-border hover:border-primary/50 hover:text-primary ml-2"
                aria-label="Cambiar tema"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-md border border-border hover:border-primary/50"
                aria-label="Cambiar tema"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md border border-border hover:border-primary/50"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border z-50 md:hidden animate-in slide-in-from-top-2">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-1">
                {navItems.map(({ id, label, num }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center gap-3 text-left py-3 px-4 rounded-md hover:bg-secondary transition-colors group"
                  >
                    <span className="font-mono text-xs text-primary/60 group-hover:text-primary transition-colors w-6">
                      {num}.
                    </span>
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
