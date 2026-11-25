import type { Localized } from "@/context/LanguageContext";

export const profile = {
  name: "Oscar Zúñiga Sánchez",
  title: { en: "Systems Engineer", es: "Ingeniero en Sistemas" } as Localized,
  image: "/images/profile.jpg",
  description: {
    en: "As a Systems Engineer, I am passionate about designing and building clean, scalable and well-structured software, from web applications and management systems to artificial intelligence agents. I enjoy taking part in the whole development cycle: requirements analysis, architecture, implementation, testing and delivery, ensuring an orderly and consistent flow in each project. I strongly believe in continuous improvement and value feedback as an opportunity to grow professionally and personally. My focus is on creating modern and reliable solutions that solve real problems, combining good engineering practices with a clear experience for the end user.",
    es: "Como Ingeniero en Sistemas, me apasiona diseñar y construir software limpio, escalable y bien estructurado, desde aplicaciones web y sistemas administrativos hasta agentes de inteligencia artificial. Disfruto participar en todo el ciclo de desarrollo: el análisis de requerimientos, la arquitectura, la implementación, las pruebas y la entrega, asegurando un flujo ordenado y consistente en cada proyecto. Creo firmemente en la mejora continua y valoro la retroalimentación como una oportunidad para crecer profesional y personalmente. Mi enfoque está en crear soluciones modernas y confiables que resuelvan problemas reales, combinando buenas prácticas de ingeniería con una experiencia de uso clara para el usuario final.",
  } as Localized,
};

export const aboutCopy = {
  skillsTitle: { en: "Skills and Tools", es: "Habilidades y Herramientas" } as Localized,
  skillsHint: {
    en: "Hover over an area to light up its constellation",
    es: "Pasa el cursor por un área para encender su constelación",
  } as Localized,
  languagesTitle: { en: "Languages", es: "Idiomas" } as Localized,
  experienceTitle: { en: "Work Experience", es: "Experiencia Laboral" } as Localized,
  educationTitle: { en: "Education", es: "Educación" } as Localized,
};

export interface SkillGroup {
  id: string;
  title: Localized;
  /** badgeDocs keys */
  skills: string[];
  /** letter of "OSCAR" this group draws on the constellation map (keep the groups in that order) */
  letter: "O" | "S" | "C" | "A" | "R";
}

/** Skills grouped by area — each group is drawn as one constellation */
export const skillGroups: SkillGroup[] = [
  { id: "frontend", title: { en: "Frontend", es: "Frontend" }, skills: ["html", "css", "javascript", "react", "tailwindcss", "reactquery", "reacthookform"], letter: "O" },
  { id: "backend", title: { en: "Backend & Data", es: "Backend y Datos" }, skills: ["csharpdotnet", "sqlserver", "supabase", "firebase", "drupal"], letter: "S" },
  { id: "ai", title: { en: "AI & Agents", es: "IA y Agentes" }, skills: ["ragllms", "langchain", "langgraph", "langfuse"], letter: "C" },
  { id: "qa", title: { en: "Testing & QA", es: "Pruebas y QA" }, skills: ["playwright", "cypress", "postman"], letter: "A" },
  { id: "tools", title: { en: "Tools & Design", es: "Herramientas y Diseño" }, skills: ["git", "github", "docker", "figma"], letter: "R" },
];

export interface SpokenLanguage {
  name: Localized;
  level: Localized;
}

export const languages: SpokenLanguage[] = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "In process of learning", es: "En proceso de aprendizaje" } },
];

export interface WorkExperience {
  company: Localized;
  position: Localized;
  period: Localized;
  /** shows the pulsing "Current" chip and node */
  current?: boolean;
  location?: Localized;
  mode?: Localized;
  summary: Localized;
  achievements: Localized<string[]>;
  /** badgeDocs keys or display names */
  technologies: string[];
}

/** Work done at Novacomp — shared by the Nova AI Apprentice and Junior Developer Intern roles */
const novacompWork: Pick<WorkExperience, "company" | "location" | "mode" | "summary" | "achievements" | "technologies"> = {
  company: { en: "Novacomp", es: "Novacomp" },
  summary: {
    en: "I build AI agents and multi-agent systems with LLMs, RAG and agent observability, working in a team under a Spec Driven Development methodology.",
    es: "Desarrollo agentes de inteligencia artificial y sistemas multiagente con LLMs, RAG y observabilidad de agentes, trabajando en equipo bajo la metodología Spec Driven Development.",
  },
  achievements: {
    en: [
      "Developed systems applying the Spec Driven Development methodology, in collaboration with a team.",
      "Participated in the creation of AI agents, applying concepts such as LLMs (Large Language Models), RAG (Retrieval-Augmented Generation) and embeddings.",
      "Built multi-agent systems with LangGraph, LangChain and orchestrators, integrating RAG and applying agent observability with Langfuse.",
      "Containerized multi-agent systems with Docker.",
      "Helped set up a collaborative development environment with the team using DevPod.",
    ],
    es: [
      "Desarrollé sistemas aplicando la metodología Spec Driven Development, en colaboración con un equipo de trabajo.",
      "Participé en la creación de agentes de inteligencia artificial, aplicando conceptos como LLMs (Large Language Models), RAG (Retrieval-Augmented Generation) y embeddings.",
      "Desarrollé sistemas multiagente con LangGraph, LangChain y orquestadores, integrando RAG y aplicando observabilidad de agentes con Langfuse.",
      "Contenericé sistemas multiagente con Docker.",
      "Participé en la configuración de un entorno de desarrollo colaborativo junto al equipo, utilizando DevPod.",
    ],
  },
  technologies: ["LangGraph", "LangChain", "Langfuse", "RAG", "LLM", "Embeddings", "Docker", "DevPod", "Spec Driven Development"],
};

export const workExperience: WorkExperience[] = [
  {
    ...novacompWork,
    position: { en: "Junior Developer Intern", es: "Junior Developer Intern" },
    location: { en: "Remote", es: "Remoto" },
    period: { en: "November 2026 – Present", es: "Noviembre 2026 – Presente" },
    current: true,
    achievements: {
      en: [
        "Earned the Oracle Cloud Infrastructure Certified Enterprise AI Professional certification.",
        ...novacompWork.achievements.en,
      ],
      es: [
        "Obtuve la certificación Oracle Cloud Infrastructure Certified Enterprise AI Professional.",
        ...novacompWork.achievements.es,
      ],
    },
  },
  {
    ...novacompWork,
    position: { en: "Nova AI Apprentice", es: "Nova AI Apprentice" },
    location: { en: "Orotina, Alajuela (Hybrid)", es: "Orotina, Alajuela (Híbrido)" },
    period: { en: "July 2026 – November 2026", es: "Julio 2026 – Noviembre 2026" },
    current: false,
  },
{
  company: { en: "Rolosa", es: "Rolosa" },
  position: { en: "Web Developer (Professional Internship)", es: "Desarrollador Web (Pasantía Profesional)" },
  period: { en: "March 2026 – July 2026", es: "Marzo 2026 – Julio 2026" },
  location: { en: "Remote", es: "Remoto" },
  mode: { en: "Remote", es: "Remoto" },
  current: false,
  summary: {
    en: "I developed and maintained features on the Ecofirma platform with Drupal, wrote automated tests with Playwright and built a corporate webinar registration site.",
    es: "Desarrollé y mantuve funcionalidades de la plataforma Ecofirma con Drupal, creé pruebas automatizadas con Playwright y construí un sitio de registro para un webinar corporativo.",
  },
  achievements: {
    en: [
      "Developed and maintained features on the Ecofirma platform using Drupal, focused on continuous improvement and resolving technical incidents.",
      "Implemented adjustments and optimizations in CMS modules and configurations, improving system efficiency and usability.",
      "Built an informational website for a corporate webinar, with dynamic registration forms integrated in Drupal.",
      "Wrote automated tests with Playwright, together with the team, to validate that the Ecofirma system works correctly.",
      "Configured content, content types and Views, ensuring proper structure and presentation of information.",
      "Worked with contributed modules and customized features according to business requirements.",
      "Collaborated in a professional team environment, delivering solutions aligned with client needs.",
    ],
    es: [
      "Desarrollé y mantuve funcionalidades en la plataforma Ecofirma con Drupal, enfocado en la mejora continua y la solución de incidencias técnicas.",
      "Implementé ajustes y optimizaciones en módulos y configuraciones del CMS, mejorando la eficiencia y usabilidad del sistema.",
      "Desarrollé una página informativa para un webinar corporativo, con formularios dinámicos de registro integrados en Drupal.",
      "Desarrollé pruebas automatizadas con Playwright, junto al equipo, para validar el correcto funcionamiento del sistema Ecofirma.",
      "Configuré y gestioné contenidos, tipos de contenido y vistas (Views), asegurando una correcta estructura y presentación de la información.",
      "Trabajé con módulos contribuidos y personalicé funcionalidades según los requerimientos del negocio.",
      "Colaboré en equipo en un entorno profesional, implementando soluciones alineadas a las necesidades del cliente.",
    ],
  },
  technologies: ["Drupal", "Playwright", "Views", "CMS"],
},
  {
    company: { en: "DMR Rentals", es: "DMR Rentals" },
    position: { en: "Professional Practice", es: "Práctica Profesional" },
    period: { en: "2025", es: "2025" },
    summary: {
      en: "I completed my professional internship at DMR Rentals, contributing to the development of websites and internal systems that support administrative and operational processes, with a focus on usability and efficiency.",
      es: "Realicé mi práctica profesional en DMR Rentals, colaborando en el desarrollo de páginas web y sistemas internos que apoyan procesos administrativos y operativos, con enfoque en usabilidad y eficiencia.",
    },
    achievements: {
      en: [
        "Developed the company website to showcase vacation rentals and properties for sale.",
        "Built property detail pages and an overview of the company's services.",
        "Contributed to internal systems that support administrative and operational processes.",
      ],
      es: [
        "Desarrollé el sitio web de la empresa para mostrar alojamientos turísticos y propiedades en venta.",
        "Construí el detalle de cada propiedad y la presentación de los servicios de la empresa.",
        "Colaboré en sistemas internos que apoyan procesos administrativos y operativos.",
      ],
    },
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Firebase", "Supabase"],
  },
  {
    company: { en: "Hogar de Ancianos de Santa Cruz", es: "Hogar de Ancianos de Santa Cruz" },
    position: { en: "Engineering Project", es: "Proyecto de Ingeniería" },
    period: { en: "2024 – 2025", es: "2024 – 2025" },
    location: { en: "Santa Cruz, Guanacaste", es: "Santa Cruz, Guanacaste" },
    summary: {
      en: "I participated in the development of an informational website and an administrative system for the Santa Cruz Nursing Home, working on both frontend and backend to improve internal management.",
      es: "Participé en el desarrollo de un sitio web informativo y un sistema administrativo para el Hogar de Ancianos de Santa Cruz, trabajando en frontend y backend para mejorar la gestión interna.",
    },
    achievements: {
      en: [
        "Built the informational website with online admission, volunteer and donation requests.",
        "Developed the administrative system for resident profiles, medical information and appointments.",
        "Implemented inventory control for food, cleaning supplies and office materials.",
      ],
      es: [
        "Construí el sitio web informativo con solicitudes en línea de ingreso, voluntariado y donaciones.",
        "Desarrollé el sistema administrativo con perfiles de residentes, información médica y citas.",
        "Implementé el control de inventarios de comida, limpieza y materiales de oficina.",
      ],
    },
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "C#", "MySQL"],
  },
  
];

export const experienceCopy = {
  current: { en: "Current", es: "Actual" } as Localized,
  achievements: { en: "Key achievements", es: "Logros principales" } as Localized,
  technologies: { en: "Technologies used:", es: "Tecnologías utilizadas:" } as Localized,
  summary: {
    startYear: 2024,
    sinceLabel: { en: "Since", es: "Desde" } as Localized,
    range: { en: "2024 – Present", es: "2024 – Presente" } as Localized,
    rolesLabel: { en: "Roles", es: "Roles" } as Localized,
    pathLabel: { en: "Path", es: "Trayectoria" } as Localized,
    path: { en: "Full-stack → AI Engineering", es: "Full-stack → Ingeniería de IA" } as Localized,
  },
};

export interface Education {
  institution: Localized;
  degree: Localized;
  period: string;
  description: Localized;
}

export const education: Education[] = [
  {
    institution: { en: "Universidad Nacional de Costa Rica", es: "Universidad Nacional de Costa Rica" },
    degree: {
      en: "Bachelor's Degree in Information Systems Engineering",
      es: "Bachillerato en Ingeniería en Sistemas de Información",
    },
    period: "2022 – 2025",
    description: {
      en: "Focus on web application development, databases, and software engineering.",
      es: "Enfoque en desarrollo de aplicaciones web, bases de datos e ingeniería de software.",
    },
  },
  {
    institution: { en: "Universidad Nacional de Costa Rica", es: "Universidad Nacional de Costa Rica" },
    degree: {
      en: "Diploma in Computer Applications Programming",
      es: "Diplomado en Programación de Aplicaciones Informáticas",
    },
    period: "2022 – 2024",
    description: {
      en: "Foundation in programming, data structures, and software development.",
      es: "Fundamentos en programación, estructuras de datos y desarrollo de software.",
    },
  },
];
