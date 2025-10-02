import type { Work } from "@/types";
import { IconType } from "react-icons";

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

import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiExpress, SiNodedotjs, SiVite, SiNextdotjs, SiPostgresql } from "react-icons/si";

import { BiLogoJava, BiLogoSpringBoot, BiLogoFigma } from "react-icons/bi";


type SkillType = {
   icon: IconType;
   name: string;
}

export const arrSkills: SkillType[] = [
   { icon: SiReact, name: "React" },
   { icon: SiVite, name: "Vite" },
   { icon: SiNextdotjs, name: "Next.js" },
   { icon: SiTypescript, name: "TypeScript" },
   { icon: SiJavascript, name: "JavaScript" },
   { icon: SiTailwindcss, name: "Tailwind CSS" },
   { icon: SiExpress, name: "Express" },
   { icon: SiNodedotjs, name: "Node.js" },
   { icon: BiLogoJava, name: "Java" },
   { icon: BiLogoSpringBoot, name: "Spring Boot" },
   { icon: SiPostgresql, name: "PostgreSQL" },
   { icon: BiLogoFigma, name: "Figma" }
]
