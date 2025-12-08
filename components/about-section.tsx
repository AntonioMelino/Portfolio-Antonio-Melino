import { Card } from "@/components/ui/card"
import { Code2, Database, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Sobre Mí</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Desarrollador Full Stack con pasión por la innovación
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Soy un desarrollador full stack apasionado por crear experiencias web que no solo se ven bien, sino que
              también funcionan de manera excepcional. Con experiencia en el desarrollo tanto del frontend como del
              backend, me especializo en construir aplicaciones web modernas y escalables.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi enfoque combina código limpio, diseño centrado en el usuario y las mejores prácticas de la industria
              para entregar soluciones digitales que superan las expectativas.
            </p>
          </div>
          <div className="grid gap-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frontend Moderno</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    React, Next.js, TypeScript y herramientas modernas para crear interfaces intuitivas
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Backend Robusto</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Node.js, bases de datos SQL/NoSQL y APIs RESTful para soluciones escalables
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experiencia Completa</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    De la idea al despliegue, manejando todo el ciclo de desarrollo
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
