import type { Work } from "@/types";
import {
   type IconType,
   ReactIcon,
   TypeScriptIcon,
   JavaScriptIcon,
   TailwindIcon,
   ExpressIcon,
   NodeIcon,
   ViteIcon,
   NextJSIcon,
   PostgreSQLIcon,
   JavaIcon,
   SpringBootIcon,
   FigmaIcon,
} from "@/lib/icons";

export const arrWorks: Work[] = [
   {
      company: "PET-Saúde: Inovação e Saúde Digital no SUS",
      role: "Developer",
      duration: "2025 - Presente",
      logo: "/src/works/petsaude.webp",
   },
   {
      company: "Exception Jr",
      role: "Full Stack Developer",
      duration: "2024 - Presente",
      logo: "/src/works/exceptionjr.webp",
   },
];


type SkillType = {
   icon: IconType;
   name: string;
}

export const arrSkills: SkillType[] = [
   { icon: ReactIcon, name: "React" },
   { icon: ViteIcon, name: "Vite" },
   { icon: NextJSIcon, name: "Next.js" },
   { icon: TypeScriptIcon, name: "TypeScript" },
   { icon: JavaScriptIcon, name: "JavaScript" },
   { icon: TailwindIcon, name: "Tailwind CSS" },
   { icon: ExpressIcon, name: "Express" },
   { icon: NodeIcon, name: "Node.js" },
   { icon: JavaIcon, name: "Java" },
   { icon: SpringBootIcon, name: "Spring Boot" },
   { icon: PostgreSQLIcon, name: "PostgreSQL" },
   { icon: FigmaIcon, name: "Figma" }
]
