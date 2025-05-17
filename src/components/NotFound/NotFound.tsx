import { Link } from "react-router"
import ContactLink from "../ContactLink/ContactLink"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center mt-10 items-center gap-2'>
            <h1 className='text-center text-base text-neutral-100'>Pagina não encontrada!</h1>
            <p className='text-center text-sm text-neutral-400'>
                A página que você está procurando não existe.
            </p>

            <div className="relative w-50 h-50 self-center">
                <div className="absolute inset-0 w-full h-full rounded-xl bg-gray-200 animate-pulse" />
                <img
                    loading="lazy"
                    src="https://i.pinimg.com/originals/73/09/a2/7309a2ccc75cd3c84d0cf031e0f2cc85.gif"
                    alt="Imagem de personagem confuso"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
            </div>

            <Link to="/" className='text-xs px-4 py-2 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white transition-all duration-200'>Voltar para o Início</Link>

            <div className="flex justify-between border-t pt-4 border-neutral-800">
                <div className="flex gap-5 text-white">
                    <ContactLink title="Github" Icon={FaGithub} href="https://github.com/coelhomarcus" />
                    <ContactLink title="Linkedin" Icon={FaLinkedin} href="https://www.linkedin.com/in/coelhomarcus/" />
                    <ContactLink title="E-mail" Icon={MdAlternateEmail} href="mailto:marcusrangelcoelho@gmail.com" />
                </div>
            </div>
        </div>
    )
}

export default NotFound