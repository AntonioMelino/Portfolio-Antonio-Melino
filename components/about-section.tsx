import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Sparkles,
  Rocket,
  Users,
  Target,
  BookOpen,
  Cloud,
  Bot,
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
            Desarrollador Full Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Formación sólida, proyectos reales y experiencia en entornos
            laborales tecnológicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mi Historia</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Trabajo con tecnología desde hace años en entornos laborales
                reales, lo que me dio una perspectiva práctica que va más allá
                del código: entender procesos, detectar problemas y proponer
                soluciones concretas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Paralelamente fui construyendo mi stack como desarrollador full
                stack a través de la UTN, Coderhouse, certificaciones Microsoft
                y proyectos propios llevados a producción, combinando formación
                técnica sólida con práctica real.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Mi Objetivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Integrarme a un equipo donde pueda aportar desde el día uno,
                    colaborar con profesionales de alto nivel y seguir creciendo
                    como desarrollador full stack.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">En Constante Evolución</h4>
                  <p className="text-sm text-muted-foreground">
                    Actualmente cursando el Certificado Profesional Microsoft
                    Full-Stack Developer, con foco en .NET Core, Azure, CI/CD y
                    arquitecturas escalables.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Soft Skills Valiosas</h4>
                  <p className="text-sm text-muted-foreground">
                    Comunicación efectiva, resolución de problemas, trabajo en
                    equipo y adaptabilidad. Creo que el éxito técnico va de la
                    mano con habilidades interpersonales sólidas.
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
                    React, Next.js, TypeScript, Tailwind CSS. Creo interfaces
                    intuitivas y accesibles con deploys en Vercel listos para
                    producción.
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
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Tailwind CSS
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
                    Ecosistema Microsoft con .NET y C#, APIs RESTful con
                    autenticación JWT, Firebase Firestore en tiempo real, SQL y
                    MySQL para aplicaciones robustas y escalables.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      .NET
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      C#
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Firebase
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      SQL
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      JWT
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Cloud className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">DevOps & Cloud</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deploy continuo con Vercel y Firebase, contenedores con
                    Docker y familiaridad con AWS y Azure. Mis proyectos
                    personales están en producción, no solo en localhost.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Docker
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Vercel
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      AWS
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Azure
                    </span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      CI/CD
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
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">IA integrada al flujo</h4>
                <p className="text-sm text-muted-foreground">
                  Uso Claude Code, GitHub Copilot y otras herramientas de IA
                  directamente en el IDE para desarrollar más rápido y con mejor
                  calidad de código
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Orientado a resultados</h4>
                <p className="text-sm text-muted-foreground">
                  Mis proyectos tienen deploy real y funcionalidad completa. En
                  mi trabajo operativo automaticé tareas con Excel avanzado, lo
                  que me dio visión de procesos y resultados concretos.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Colaborador y metódico</h4>
                <p className="text-sm text-muted-foreground">
                  Experiencia trabajando con metodologías Agile y Scrum. Enfoque
                  claro en estructura, legibilidad y mantenibilidad del código
                  en equipo
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center mt-16 pt-8 border-t">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Buscás un desarrollador full stack con formación sólida, proyectos
            en producción y visión de negocio?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Hablemos</span>
            <Sparkles className="h-4 w-4" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Abierto a oportunidades donde pueda aportar desde el primer día y
            seguir creciendo
          </p>
        </div>
      </div>
    </section>
  );
}
