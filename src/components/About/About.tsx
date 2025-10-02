import PageTitle from "@/components/PageTitle/PageTitle";
import { arrWorks, arrSkills } from "@/utils/data/works";
import { RxArrowTopRight, RxLayers } from "react-icons/rx";
import { BiLibrary } from "react-icons/bi";

import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "../../lib/ui/tooltip";

const About = () => {
   return (
      <main className="text-foreground">
         <PageTitle title="Marcus Coelho" />
         <h1 className="text-xl font-semibold mb-2">Marcus Coelho</h1>
         <p className="text-muted-foreground text-base mb-4 font-medium">
            Olá! Sou estudante de Sistemas de Informação (6/8) na UNIFESSPA,
            desenvolvedor no PET-Saúde: Inovação e Saúde Digital no SUS, um projeto do Ministério da Saúde.
         </p>
         <p className="text-muted-foreground text-base mb-4 font-medium">
            Se quiser saber mais sobre minha trajetória,{" "}
            <span>
               <a
                  className="text-foreground hover:underline hover:text-accent-foreground"
                  href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf"
                  download
               >
                  veja meu currículo{<RxArrowTopRight className="inline" />}
               </a>
            </span>
         </p>
         <Skills />
         <WorksExperience />
      </main>
   );
};

function Skills() {
   return <div className="mb-4 flex flex-col">
      <div className="flex items-center gap-2 text-foreground justify-between">
         <p className="text-base font-semibold">Skills</p>
         <BiLibrary className="text-base text-muted-foreground" />
      </div>
      <div className="mt-2 flex flex-wrap gap-2 sm:justify-center">
         {arrSkills.map((Skill, index) => (
            <Tooltip key={index}>
               <TooltipTrigger>
                  <div
                     className="p-2 rounded border text-foreground hover:text-muted-foreground"
                  >
                     <Skill.icon className="size-5" />
                  </div>
               </TooltipTrigger>
               <TooltipContent className="rounded">
                  {Skill.name}
               </TooltipContent>
            </Tooltip>

         ))}
      </div>
   </div >
}

function WorksExperience() {
   return (
      <div className="flex flex-col gap-3">
         <div className="flex items-center gap-2 text-foreground justify-between">
            <p className="text-base font-semibold">Experiência</p>
            <RxLayers className="text-base text-muted-foreground" />
         </div>
         <div className="space-y-4">
            {arrWorks.map((work) => (
               <div
                  className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center"
                  key={work.company}
               >
                  <div className="flex gap-2 flex-col sm:flex-row">
                     <img
                        src={work.logo}
                        alt={work.company}
                        className="size-6 sm:size-10 object-cover rounded-sm"
                     />
                     <span>
                        <div>{work.company}</div>
                        <p className="text-[12px] sm:text-sm text-muted-foreground font-medium">
                           {work.role}
                        </p>
                     </span>
                  </div>
                  <div>
                     <p className="text-[12px] sm:text-sm text-muted-foreground">
                        {work.duration}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default About;
