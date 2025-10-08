import { arrSkills } from "@/utils/data/works";
import { LibraryIcon } from "@/lib/icons";

import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "../ui/tooltip";

function Skills() {
   return <div className="mb-4 flex flex-col">
      <div className="flex items-center gap-2 text-foreground justify-between">
         <h2 className="text-base font-semibold">Skills</h2>
         <LibraryIcon className="text-base text-muted-foreground" />
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

export default Skills
