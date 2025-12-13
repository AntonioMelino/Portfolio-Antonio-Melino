import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Sparkles,
  Rocket,
  Users,
  Target,
  BookOpen,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">
            Sobre Mí
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Desarrollador Full Stack apasionado
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Buscando mi primera oportunidad profesional para aplicar mis
            conocimientos y crecer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mi Historia</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mi pasión por la programación comenzó mientras construía mis
                primeros proyectos personales. Desde entonces, he dedicado
                cientos de horas a dominar las tecnologías modernas del
                desarrollo web, siempre con el objetivo de convertirme en un
                profesional capaz de crear soluciones impactantes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como recién graduado, traigo una combinación de conocimiento
                actualizado, entusiasmo por aprender, y una perspectiva fresca
                para abordar problemas técnicos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Mi Objetivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Unirme a un equipo donde pueda contribuir, aprender de
                    profesionales experimentados, y desarrollar mi carrera como
                    desarrollador full stack.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">En Constante Aprendizaje</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicado a mantenerme actualizado con las últimas
                    tecnologías y mejores prácticas mediante cursos,
                    documentación y proyectos prácticos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    Frontend Moderno
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      Especialidad
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    React, Next.js, TypeScript, Tailwind CSS. Me apasiona crear
                    interfaces intuitivas, accesibles y con excelente
                    experiencia de usuario.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Backend Sólido</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Especializado en el ecosistema Microsoft con .NET y C#,
                    desarrollando soluciones robustas con bases de datos SQL y
                    MySQL para aplicaciones escalables.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      .NET
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      SQL
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      C#
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Soft Skills Valiosas
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comunicación efectiva, resolución de problemas, trabajo en
                    equipo y adaptabilidad. Creo que el éxito técnico va de la
                    mano con habilidades interpersonales sólidas.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Comunicación
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Trabajo en equipo
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Resolución de problemas
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="mt-16 pt-12 border-t">
          <h3 className="text-2xl font-bold text-center mb-10">
            Lo que me define
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Proactivo y Autodidacta</h4>
                <p className="text-sm text-muted-foreground">
                  Siempre buscando aprender nuevas tecnologías y mejorar mis
                  habilidades por mi cuenta
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Colaborador Nato</h4>
                <p className="text-sm text-muted-foreground">
                  Disfruto trabajar en equipo, compartir conocimientos y
                  aprender de los demás
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Detallista y Organizado</h4>
                <p className="text-sm text-muted-foreground">
                  Enfoque metódico con énfasis en la claridad, estructura y
                  calidad del código para desarrollar soluciones robustas y
                  mantenibles
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center mt-16 pt-8 border-t">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Buscas un desarrollador junior con motivación, ganas de aprender y
            compromiso?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Contáctame</span>
            <Sparkles className="h-4 w-4" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Estoy emocionado por la posibilidad de contribuir a tu equipo y
            crecer profesionalmente
          </p>
        </div>
      </div>
    </section>
  );
}
