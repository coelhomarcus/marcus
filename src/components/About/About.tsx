import { Link } from "react-router";
import PageTitle from "@/components/PageTitle/PageTitle";
import { CgExternal } from "react-icons/cg";
import { arrBlog } from "@/utils/data/posts";
import { arrWorks } from "@/utils/data/works";
import { FaBriefcase } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {
   return (
      <main className="text-foreground">
         <PageTitle title="Marcus Coelho" suffix="" />
         <h1 className="text-xl font-semibold mb-2">Marcus Coelho</h1>
         <p className="text-muted-foreground text-base mb-4">
            Olá! Sou estudante de Sistemas de Informação (6/8) na Unifesspa, bolsista desenvolvedor no PET-Saúde:
            Inovação e Saúde Digital no SUS, e também desenvolvedor na Exception Jr. Se quiser saber mais sobre
            minha trajetória,{" "}
            <span>
               <a
                  className="transition-colors text-foreground hover:underline"
                  href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf"
                  download
               >
                  veja meu currículo{<CgExternal className="inline mb-1" />}
               </a>
            </span>
         </p>
         <p className="text-muted-foreground text-base mb-4">
            Atualmente utilizo o ecossistema <span className="text-foreground">React</span> para construir meus
            projetos, meu conhecimento consistente em{" "}
            <span className="text-foreground">Vite, Next.js, Tailwind, Typescript, Node.js</span> e pretendo
            aprofundar meu conhecimento em <span className="text-foreground">Go</span>
            <span>
               <img src="./src/assets/gopher.svg" alt="Gopher" className="size-6 inline ml-1 active:scale-95" />
            </span>
         </p>
         <div className="flex justify-center mb-4 gap-4">
            <Link
               to={`/blog/${arrBlog[0].slug}`}
               className="group flex items-center justify-center gap-1 vw-fit text-xs text-muted-foreground border border-border hover:border-border/30 hover:bg-gradient-to-b hover:from-background hover:to-muted p-1 text-center transition-all duration-300 rounded-md"
            >
               <div className="w-fit border border-border group-hover:border-transparent p-1 px-2 mr-1 text-center transition-all duration-300 rounded-md">
                  <div className="relative inline-flex w-2 h-2 mr-1">
                     <div className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></div>
                     <div className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  Novo
               </div>
               Post publicado! Vá conferir <IoArrowForwardSharp className="mr-1" />
            </Link>
         </div>
         <WorksExperience />
      </main>
   );
};

function WorksExperience() {
   return (
      <div className="space-y-6 gap-2">
         <div className="flex items-center gap-2 text-foreground justify-between">
            <p className="text-sm font-semibold">Experiência</p>
            <FaBriefcase className="text-sm text-muted-foreground" />
         </div>
         {arrWorks.map((work) => (
            <div className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center" key={work.company}>
               <div className="flex gap-2 flex-col sm:flex-row">
                  <img src={work.logo} alt={work.company} className="size-6 sm:size-10 object-cover rounded-sm" />
                  <span>
                     <h3>{work.company}</h3>
                     <p className="text-[12px] sm:text-sm text-muted-foreground">{work.role}</p>
                  </span>
               </div>
               <div>
                  <p className="text-[12px] sm:text-sm text-muted-foreground">{work.duration}</p>
               </div>
            </div>
         ))}
      </div>
   );
}

export default About;
