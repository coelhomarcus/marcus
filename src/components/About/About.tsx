import { Link } from "react-router";

const About = () => {
    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-4'>Marcus Coelho</h1>
            <p className='text-neutral-400 text-sm'>
                Olá, me chamo Marcus Coelho, sou estudante de Sistemas de Informação na Unifesspa e estou sempre em busca de aprender coisas novas.
                Se quiser saber mais sobre minha trajetória, <span><a className="transition-colors text-neutral-100 hover:underline" href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf" download>veja meu currículo</a></span>.
                <br />
                <br />
                Gosto de criar sites bonitos, acessíveis e fáceis de usar. No dia a dia, trabalho com o ecossistema React, utilizando principalmente <span className="text-neutral-300">React, Vite/Next.js, Tailwind e TypeScript.</span> Estou sempre buscando evoluir como desenvolvedor — atualmente, me aprofundando em back-end com <span className="text-neutral-300">Node.js e Go</span>.
                <br />
                <br />
                Atualmente, faço parte da Exception Jr, uma empresa júnior da faculdade, onde atuo como Full Stack Developer. Alguns dos <Link className="transition-colors text-neutral-100 hover:underline" to="/projects">projetos</Link> em que estou envolvido incluem o Conecta Canaã.
            </p>
        </div >
    )
}

export default About