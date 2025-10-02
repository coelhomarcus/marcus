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

import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiExpress, SiNodedotjs, SiVite, SiNextdotjs, SiPostgresql, SiMysql, SiSqlite } from "react-icons/si";

export const arrSkills: IconType[] = [
   SiTypescript,
   SiJavascript,
   SiReact,
   SiTailwindcss,
   SiExpress,
   SiNodedotjs,
   SiVite,
   SiNextdotjs,
   SiPostgresql,
   SiMysql,
   SiSqlite,
]
