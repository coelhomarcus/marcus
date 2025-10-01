import PageTitle from "@/components/PageTitle/PageTitle";
import { arrWorks } from "@/utils/data/works";

import { ArrowTopRightIcon, LayersIcon } from "@radix-ui/react-icons";

const About = () => {
   return (
      <main className="text-foreground">
         <PageTitle title="Marcus Coelho" />
         <h1 className="text-xl font-semibold mb-2">Marcus Coelho</h1>
         <p className="text-muted-foreground text-base mb-4 font-medium">
            Olá! Sou estudante de Sistemas de Informação (6/8) na Unifesspa,
            bolsista desenvolvedor no PET-Saúde: Inovação e Saúde Digital no SUS, e
            também desenvolvedor na Exception Jr.
         </p>
         <p className="text-muted-foreground text-base mb-4 font-medium">
            Se quiser saber mais sobre minha trajetória,{" "}
            <span>
               <a
                  className="text-foreground hover:underline hover:text-accent-foreground"
                  href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf"
                  download
               >
                  veja meu currículo{<ArrowTopRightIcon className="inline" />}
               </a>
            </span>
         </p>
         <p className="text-muted-foreground text-base mb-4 font-medium">
            Atualmente utilizo o ecossistema React para construir meus projetos, meu conhecimento consistente em Vite, Next.js, Talwind, Typescript, Node.js e pretendo aprofundar meu conhecimento em Java para desenvolver aplicações back-end.
         </p>
         <WorksExperience />
      </main>
   );
};

function WorksExperience() {
   return (
      <div className="flex flex-col gap-3">
         <div className="flex items-center gap-2 text-foreground justify-between">
            <p className="text-base font-semibold">Experiência</p>
            <LayersIcon className="text-base text-muted-foreground" />
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
