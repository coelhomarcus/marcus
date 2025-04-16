import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const About = () => {
    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-4'>Marcus Coelho</h1>
            <p className='text-neutral-400 text-sm'>
                Olá, me chamo Marcus Coelho, sou estudante de Sistemas de Informação na Unifesspa e atualmente estou focado em desenvolvimento web, mas sempre busco aprender coisas novas.
                <br />
                <br />
                Sou apaixonado em criar coisas blablabla
                <br />
                <br />
                Zero criatividade para cirar esse tipo de texto
            </p>
            <div className="flex gap-5 border-t mt-4 pt-4 border-neutral-800">
                <a href="mailto:marcusrangelcoelho@gmail.com" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200">
                    <MdAlternateEmail className='size-4' />
                    E-mail
                </a>
                <a href="https://github.com/coelhomarcus" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200">
                    <FaGithub className='size-4' />
                    Github
                </a>
                <a href="https://www.linkedin.com/in/coelhomarcus/" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200">
                    <FaLinkedin className='size-4' />
                    Linkedin
                </a>
            </div>
        </div>
    )
}

export default About