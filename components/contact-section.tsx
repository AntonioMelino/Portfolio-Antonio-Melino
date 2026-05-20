"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Send, Terminal } from "lucide-react";

const SvgGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al enviar el mensaje.");
        return;
      }

      setSuccess("¡Mensaje enviado correctamente!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary/60 mb-3">// 07. contact.tsx</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trabajemos Juntos
          </h2>
          <p className="text-lg text-muted-foreground">
            ¿Tenés un proyecto en mente? Me encantaría escuchar sobre él
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Form — terminal style */}
          <div className="border border-border rounded-xl overflow-hidden bg-card">
            {/* Terminal header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-secondary border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">send_message.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-primary/70 mb-2">
                  // nombre
                </label>
                <div className="flex items-center gap-2 border border-border rounded-md bg-secondary/40 focus-within:border-primary/60 transition-colors px-3 py-2">
                  <span className="font-mono text-xs text-primary/50 select-none">$</span>
                  <input
                    id="name"
                    type="text"
                    placeholder="tu_nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-primary/70 mb-2">
                  // email
                </label>
                <div className="flex items-center gap-2 border border-border rounded-md bg-secondary/40 focus-within:border-primary/60 transition-colors px-3 py-2">
                  <span className="font-mono text-xs text-primary/50 select-none">$</span>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-primary/70 mb-2">
                  // mensaje
                </label>
                <div className="border border-border rounded-md bg-secondary/40 focus-within:border-primary/60 transition-colors px-3 py-2">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-xs text-primary/50 select-none mt-0.5">$</span>
                    <textarea
                      id="message"
                      placeholder="Contame sobre tu proyecto..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-mono text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? (
                  <>
                    <span className="cursor-blink">▌</span>
                    ejecutando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {">"} send_message()
                  </>
                )}
              </button>

              {success && (
                <p className="font-mono text-xs text-primary text-center">
                  ✓ {success}
                </p>
              )}
              {error && (
                <p className="font-mono text-xs text-destructive text-center">
                  ✗ {error}
                </p>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Mail className="h-5 w-5 text-primary" />,
                label: "Email",
                value: "antoniomelino1997@gmail.com",
                href: "mailto:antoniomelino1997@gmail.com",
              },
              {
                icon: <SvgLinkedin />,
                label: "LinkedIn",
                value: "antonio-melino-82a885213",
                href: "https://www.linkedin.com/in/antonio-melino-82a885213/",
              },
              {
                icon: <SvgGithub />,
                label: "GitHub",
                value: "AntonioMelino",
                href: "https://github.com/AntonioMelino",
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-border rounded-lg bg-card hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] transition-all duration-300 group"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/15 transition-colors text-primary">
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-primary/60 mb-0.5">{label}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* CTA card */}
            <div className="border border-primary/30 rounded-lg p-5 bg-primary/5 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-primary">status.sh</span>
              </div>
              <p className="font-mono text-sm text-foreground mb-1">
                <span className="text-primary">▸ </span>Disponible para proyectos
              </p>
              <p className="font-mono text-sm text-foreground">
                <span className="text-primary">▸ </span>Freelance & relación de dependencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
