import { Card } from "@/components/ui/card";
import {
  Code2,
  FileJson,
  FileCode,
  Atom,
  Layout,
  Layers,
  Coffee,
  Hash,
  Box,
  Flame,
  Database,
  GitBranch,
  Brain,
  Globe,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <Code2 size={18} /> },
      { name: "CSS", icon: <FileJson size={18} /> },
      { name: "JavaScript", icon: <FileCode size={18} /> },
      { name: "TypeScript", icon: <FileCode size={18} /> },
      { name: "React.js", icon: <Atom size={18} /> },
      { name: "Next.js", icon: <Globe size={18} /> },
      { name: "Tailwind CSS", icon: <Layers size={18} /> },
      { name: "Bootstrap", icon: <Layout size={18} /> },
      { name: "Material UI", icon: <Layers size={18} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <Server size={18} /> },
      { name: "Java", icon: <Coffee size={18} /> },
      { name: "C#", icon: <Hash size={18} /> },
      { name: "C++", icon: <FileCode size={18} /> },
      { name: ".NET", icon: <Box size={18} /> },
      { name: "SQL", icon: <Database size={18} /> },
      { name: "MySQL", icon: <Database size={18} /> },
    ],
  },
  {
    title: "Herramientas & Cloud",
    skills: [
      { name: "GitHub", icon: <GitBranch size={18} /> },
      { name: "Firebase", icon: <Flame size={18} /> },
      { name: "IA", icon: <Brain size={18} /> },
      { name: "Inglés técnico", icon: <Globe size={18} /> },
    ],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>

              {/* MODIFICADO: Grid flexible con wrap */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-md text-sm border border-secondary/40 whitespace-nowrap"
                  >
                    {skill.icon}
                    {skill.name}
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
