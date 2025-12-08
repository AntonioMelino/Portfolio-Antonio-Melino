import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Material UI",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Java", "C#", ".NET", "Firebase", "C++"],
  },
  {
    title: "Base de Datos",
    skills: ["SQL", "MySQL"],
  },
  {
    title: "DevOps & Herramientas",
    skills: ["GitHub", "Inglés técnico", "IA"],
  },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">
            Habilidades
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Herramientas y tecnologías con las que trabajo para crear soluciones
            robustas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
