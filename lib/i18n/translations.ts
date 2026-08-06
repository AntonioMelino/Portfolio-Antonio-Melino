import type { Language } from "@/components/language-provider";

interface Translations {
  header: {
    nav: {
      inicio: string;
      proyectos: string;
      stack: string;
      experiencia: string;
      educacion: string;
      sobreMi: string;
      contacto: string;
    };
    ariaHome: string;
    ariaTheme: string;
    ariaMenu: string;
    ariaLanguage: string;
  };
  hero: {
    fileComment: string;
    badge: string;
    roles: string[];
    description: string;
    ctaProjects: string;
    ctaCV: string;
    ariaEmailDefault: string;
    ariaEmailCopied: string;
    copiedTooltip: string;
    photoFileComment: string;
    photoRole: string;
    scrollHint: string;
  };
  projects: {
    fileComment: string;
    title: string;
    subtitle: string;
    featuredFileComment: string;
    featuredBadgeMobile: string;
    featuredBadgeDesktop: string;
    galleryLabel: string;
    codeLabel: string;
    goToProject: (n: number) => string;
    screenshotAlt: (n: number, title: string) => string;
  };
  skills: {
    fileComment: string;
    title: string;
    subtitle: string;
    nativeLang: string;
    technicalLang: string;
    knowledgeComment: string;
    extraBadges: string[];
  };
  experience: {
    fileComment: string;
    title: string;
    subtitle: string;
  };
  education: {
    fileComment: string;
    title: string;
    subtitle: string;
  };
  about: {
    fileComment: string;
    title: string;
    subtitle: string;
    storyHeading: string;
    storyP1: string;
    storyP2: string;
    specialtyBadge: string;
    definesFileComment: string;
    definesHeading: string;
    ctaText: string;
    ctaButton: string;
    capabilityCards: { title: string; description: string }[];
    valueCards: { title: string; description: string }[];
    objectives: { title: string; text: string }[];
  };
  contact: {
    fileComment: string;
    title: string;
    subtitle: string;
    terminalFilename: string;
    labelName: string;
    labelEmail: string;
    labelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    sending: string;
    submit: string;
    successMsg: string;
    errorMsg: string;
    emailLabel: string;
    emailCta: string;
    emailCopied: string;
    ariaEmailCopy: string;
    ariaEmailCopied: string;
    statusFilename: string;
    statusAvailable: string;
    statusFreelance: string;
  };
  footer: {
    exitWord: string;
    builtWith: string;
  };
  achievements: {
    viewLess: string;
    viewMore: (n: number) => string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      nav: {
        inicio: "inicio",
        proyectos: "proyectos",
        stack: "stack",
        experiencia: "experiencia",
        educacion: "educación",
        sobreMi: "sobre_mi",
        contacto: "contacto",
      },
      ariaHome: "Ir al inicio",
      ariaTheme: "Cambiar tema",
      ariaMenu: "Menú",
      ariaLanguage: "Cambiar idioma",
    },
    hero: {
      fileComment: "// 01. inicio.tsx",
      badge: "disponible para nuevos proyectos",
      roles: [
        "Desarrollador Full Stack",
        "Desarrollador React & Next.js",
        "Desarrollador .NET & C#",
        "APIs RESTful & JWT",
      ],
      description:
        "Desarrollador con base académica y enfoque autodidacta, motivado por crecer y aportar en el entorno IT.",
      ctaProjects: "ver_proyectos()",
      ctaCV: "descargar_cv",
      ariaEmailDefault: "Copiar email",
      ariaEmailCopied: "Email copiado",
      copiedTooltip: "¡Copiado!",
      photoFileComment: "// desarrollador.info",
      photoRole: "Desarrollador Full Stack",
      scrollHint: "scroll",
    },
    projects: {
      fileComment: "// 02. proyectos/",
      title: "Proyectos",
      subtitle: "Una selección de proyectos en producción",
      featuredFileComment: "// destacado.project",
      featuredBadgeMobile: "proyecto destacado",
      featuredBadgeDesktop: "destacado",
      galleryLabel: "galería",
      codeLabel: "código",
      goToProject: (n) => `Ir al proyecto ${n}`,
      screenshotAlt: (n, title) => `Captura de pantalla ${n} de ${title}`,
    },
    skills: {
      fileComment: "// 03. tecnologias.config.ts",
      title: "Stack Tecnológico",
      subtitle:
        "Tecnologías y herramientas que utilizo para crear soluciones robustas y escalables",
      nativeLang: "Español nativo",
      technicalLang: "Inglés técnico",
      knowledgeComment: "// conocimientos",
      extraBadges: ["CI/CD", "Seguridad en APIs", "Revisión de Código", "Clean Code"],
    },
    experience: {
      fileComment: "// 04. experiencia.ts",
      title: "Experiencia",
      subtitle: "Trayectoria profesional construyendo soluciones digitales",
    },
    education: {
      fileComment: "// 05. educacion.json",
      title: "Educación",
      subtitle: "Trayectoria académica y certificaciones profesionales",
    },
    about: {
      fileComment: "// 06. sobre_mi.tsx",
      title: "Sobre Mí",
      subtitle:
        "Formación sólida, proyectos reales y experiencia en entornos laborales tecnológicos",
      storyHeading: "Mi Historia",
      storyP1:
        "Trabajo con tecnología desde hace años en entornos laborales reales, lo que me dio una perspectiva práctica que va más allá del código: entender procesos, detectar problemas y proponer soluciones concretas.",
      storyP2:
        "Paralelamente fui construyendo mi stack como desarrollador full stack a través de la UTN, Coderhouse, certificaciones Microsoft y proyectos propios llevados a producción.",
      specialtyBadge: "Especialidad",
      definesFileComment: "// lo_que_me_define",
      definesHeading: "Lo que me define",
      ctaText:
        "¿Buscás un desarrollador full stack con formación sólida, proyectos en producción y visión de negocio?",
      ctaButton: "hablemos()",
      capabilityCards: [
        {
          title: "Frontend Moderno",
          description:
            "React, Next.js, TypeScript, Tailwind CSS. Interfaces intuitivas y accesibles con deploys en Vercel.",
        },
        {
          title: "Backend Sólido",
          description:
            "Ecosistema Microsoft con .NET y C#, APIs RESTful con autenticación JWT, Firebase y SQL.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "Deploy continuo con Vercel y Firebase, contenedores Docker, familiaridad con AWS y Azure.",
        },
      ],
      valueCards: [
        {
          title: "IA integrada al flujo",
          description:
            "Claude Code, GitHub Copilot y otras herramientas de IA directamente en el IDE para desarrollar más rápido.",
        },
        {
          title: "Orientado a resultados",
          description:
            "Proyectos con deploy real y funcionalidad completa. En mi trabajo automaticé tareas que me dieron visión de procesos.",
        },
        {
          title: "Colaborador y metódico",
          description:
            "Experiencia con Agile y Scrum. Enfoque en estructura, legibilidad y mantenibilidad del código en equipo.",
        },
      ],
      objectives: [
        {
          title: "Mi Objetivo",
          text: "Integrarme a un equipo donde pueda aportar desde el día uno, colaborar con profesionales de alto nivel y seguir creciendo como desarrollador full stack.",
        },
        {
          title: "En Constante Evolución",
          text: "Actualmente cursando el Certificado Profesional Microsoft Full-Stack Developer, con foco en .NET Core, Azure, CI/CD y arquitecturas escalables.",
        },
        {
          title: "Habilidades Blandas",
          text: "Comunicación efectiva, resolución de problemas, trabajo en equipo y adaptabilidad.",
        },
      ],
    },
    contact: {
      fileComment: "// 07. contact.tsx",
      title: "Trabajemos Juntos",
      subtitle: "¿Tenés un proyecto en mente? Me encantaría escuchar sobre él",
      terminalFilename: "enviar_mensaje.sh",
      labelName: "// nombre",
      labelEmail: "// email",
      labelMessage: "// mensaje",
      placeholderName: "tu_nombre",
      placeholderEmail: "tu@email.com",
      placeholderMessage: "Contame sobre tu proyecto...",
      sending: "ejecutando...",
      submit: "enviar_mensaje()",
      successMsg: "¡Mensaje enviado correctamente!",
      errorMsg: "Hubo un error al enviar el mensaje.",
      emailLabel: "Email",
      emailCta: "Clickea para copiar mi email",
      emailCopied: "¡Copiado!",
      ariaEmailCopy: "Copiar email",
      ariaEmailCopied: "Email copiado",
      statusFilename: "estado.sh",
      statusAvailable: "Disponible para proyectos",
      statusFreelance: "Freelance & relación de dependencia",
    },
    footer: {
      exitWord: "salir",
      builtWith: "Hecho con ❤ —",
    },
    achievements: {
      viewLess: "Ver menos",
      viewMore: (n) => `Ver ${n} más`,
    },
  },
  en: {
    header: {
      nav: {
        inicio: "home",
        proyectos: "projects",
        stack: "stack",
        experiencia: "experience",
        educacion: "education",
        sobreMi: "about_me",
        contacto: "contact",
      },
      ariaHome: "Go to home",
      ariaTheme: "Toggle theme",
      ariaMenu: "Menu",
      ariaLanguage: "Switch language",
    },
    hero: {
      fileComment: "// 01. home.tsx",
      badge: "available for new projects",
      roles: [
        "Full Stack Developer",
        "React & Next.js Developer",
        ".NET & C# Developer",
        "RESTful APIs & JWT",
      ],
      description:
        "Developer with a strong academic background and a self-taught mindset, motivated to grow and contribute in the IT field.",
      ctaProjects: "view_projects()",
      ctaCV: "download_cv",
      ariaEmailDefault: "Copy email",
      ariaEmailCopied: "Email copied",
      copiedTooltip: "Copied!",
      photoFileComment: "// developer.info",
      photoRole: "Full Stack Developer",
      scrollHint: "scroll",
    },
    projects: {
      fileComment: "// 02. projects/",
      title: "Projects",
      subtitle: "A selection of projects in production",
      featuredFileComment: "// featured.project",
      featuredBadgeMobile: "featured project",
      featuredBadgeDesktop: "featured",
      galleryLabel: "gallery",
      codeLabel: "code",
      goToProject: (n) => `Go to project ${n}`,
      screenshotAlt: (n, title) => `Screenshot ${n} of ${title}`,
    },
    skills: {
      fileComment: "// 03. tech.config.ts",
      title: "Tech Stack",
      subtitle:
        "Technologies and tools I use to build robust, scalable solutions",
      nativeLang: "Native Spanish",
      technicalLang: "Technical English",
      knowledgeComment: "// familiar with",
      extraBadges: ["CI/CD", "API Security", "Code Review", "Clean Code"],
    },
    experience: {
      fileComment: "// 04. experience.ts",
      title: "Experience",
      subtitle: "Professional journey building digital solutions",
    },
    education: {
      fileComment: "// 05. education.json",
      title: "Education",
      subtitle: "Academic background and professional certifications",
    },
    about: {
      fileComment: "// 06. about_me.tsx",
      title: "About Me",
      subtitle:
        "Solid training, real projects and experience in professional technology environments",
      storyHeading: "My Story",
      storyP1:
        "I've worked with technology for years in real-world job settings, which gave me a practical perspective that goes beyond code: understanding processes, spotting problems and proposing concrete solutions.",
      storyP2:
        "Alongside that, I built my stack as a full stack developer through UTN, Coderhouse, Microsoft certifications and my own projects taken to production.",
      specialtyBadge: "Specialty",
      definesFileComment: "// what_defines_me",
      definesHeading: "What defines me",
      ctaText:
        "Looking for a full stack developer with solid training, production projects and business vision?",
      ctaButton: "lets_talk()",
      capabilityCards: [
        {
          title: "Modern Frontend",
          description:
            "React, Next.js, TypeScript, Tailwind CSS. Intuitive, accessible interfaces deployed on Vercel.",
        },
        {
          title: "Solid Backend",
          description:
            "Microsoft ecosystem with .NET and C#, RESTful APIs with JWT authentication, Firebase and SQL.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "Continuous deployment with Vercel and Firebase, Docker containers, familiarity with AWS and Azure.",
        },
      ],
      valueCards: [
        {
          title: "AI built into the workflow",
          description:
            "Claude Code, GitHub Copilot and other AI tools right in the IDE to develop faster.",
        },
        {
          title: "Results-driven",
          description:
            "Projects with real deployments and full functionality. At work I automated tasks that gave me visibility into processes.",
        },
        {
          title: "Collaborative and methodical",
          description:
            "Experience with Agile and Scrum. Focus on structure, readability and maintainability of team code.",
        },
      ],
      objectives: [
        {
          title: "My Goal",
          text: "Join a team where I can contribute from day one, collaborate with high-level professionals and keep growing as a full stack developer.",
        },
        {
          title: "Constantly Evolving",
          text: "Currently pursuing the Microsoft Full-Stack Developer Professional Certificate, focused on .NET Core, Azure, CI/CD and scalable architectures.",
        },
        {
          title: "Soft Skills",
          text: "Effective communication, problem-solving, teamwork and adaptability.",
        },
      ],
    },
    contact: {
      fileComment: "// 07. contact.tsx",
      title: "Let's Work Together",
      subtitle: "Have a project in mind? I'd love to hear about it",
      terminalFilename: "send_message.sh",
      labelName: "// name",
      labelEmail: "// email",
      labelMessage: "// message",
      placeholderName: "your_name",
      placeholderEmail: "you@email.com",
      placeholderMessage: "Tell me about your project...",
      sending: "running...",
      submit: "send_message()",
      successMsg: "Message sent successfully!",
      errorMsg: "There was an error sending the message.",
      emailLabel: "Email",
      emailCta: "Click to copy my email",
      emailCopied: "Copied!",
      ariaEmailCopy: "Copy email",
      ariaEmailCopied: "Email copied",
      statusFilename: "status.sh",
      statusAvailable: "Available for projects",
      statusFreelance: "Freelance & full-time positions",
    },
    footer: {
      exitWord: "exit",
      builtWith: "Made with ❤ —",
    },
    achievements: {
      viewLess: "Show less",
      viewMore: (n) => `Show ${n} more`,
    },
  },
};
