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
  Cloud,
  Shield,
  Users,
  Sparkles,
  Code,
  GitMerge,
  Container,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <Atom size={18} /> },
      { name: "Next.js", icon: <Globe size={18} /> },
      { name: "JavaScript (ES6+)", icon: <FileCode size={18} /> },
      { name: "TypeScript", icon: <FileCode size={18} /> },
      { name: "HTML5", icon: <Code2 size={18} /> },
      { name: "CSS3", icon: <FileJson size={18} /> },
      { name: "Tailwind CSS", icon: <Layers size={18} /> },
      { name: "Bootstrap", icon: <Layout size={18} /> },
      { name: "Material UI", icon: <Layers size={18} /> },
      { name: "Responsive Design", icon: <Layout size={18} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C#", icon: <Hash size={18} /> },
      { name: ".NET", icon: <Box size={18} /> },
      { name: "Java", icon: <Coffee size={18} /> },
      { name: "C++", icon: <FileCode size={18} /> },
      { name: "Node.js", icon: <Server size={18} /> },
      { name: "REST APIs / RESTful", icon: <Code size={18} /> },
      { name: "JWT / Autenticación", icon: <Shield size={18} /> },
    ],
  },
  {
    title: "Base de Datos",
    skills: [
      { name: "Firebase (Firestore)", icon: <Flame size={18} /> },
      { name: "SQL", icon: <Database size={18} /> },
      { name: "MySQL", icon: <Database size={18} /> },
      { name: "Entity Framework (ORM)", icon: <Box size={18} /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Git", icon: <GitBranch size={18} /> },
      { name: "GitHub", icon: <GitMerge size={18} /> },
      { name: "Vercel", icon: <Cloud size={18} /> },
      { name: "Docker", icon: <Container size={18} /> },
      { name: "AWS", icon: <Cloud size={18} /> },
    ],
  },
  {
    title: "IA & Dev Tools",
    skills: [
      { name: "Claude Code", icon: <Brain size={18} /> },
      { name: "DeepSeek", icon: <Sparkles size={18} /> },
      { name: "Gemini", icon: <Brain size={18} /> },
      { name: "GitHub Copilot", icon: <Code size={18} /> },
    ],
  },
  {
    title: "Metodologías & Soft Skills",
    skills: [
      { name: "Agile", icon: <Users size={18} /> },
      { name: "Scrum", icon: <Users size={18} /> },
      { name: "Trabajo colaborativo", icon: <Users size={18} /> },
      { name: "Resolución de problemas", icon: <Brain size={18} /> },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">
            Habilidades Técnicas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnologías, herramientas y metodologías que utilizo para crear
            soluciones robustas y escalables
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full">
            <Globe size={16} />
            <span className="text-sm font-medium">
              🇪🇸 Español nativo | 🇬🇧 Inglés técnico
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-lg transition-all hover:border-primary/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-md text-sm border border-secondary/40 whitespace-nowrap hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Badge adicional de metodologías ágiles */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              <Sparkles size={14} />
              CI/CD
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              <Shield size={14} />
              Seguridad en APIs
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              <Users size={14} />
              Code Review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
