import { Link } from "react-router"
import ContactLink from "../ContactLink/ContactLink"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center mt-10 items-center gap-5'>
            <h1 className='text-center text-sm'>Pagina não encontrada!</h1>
            <p className='text-center text-xs text-neutral-400'>
                A página que você está procurando não existe.
            </p>

            <div className="relative w-50 h-50 self-center">
                <div className="absolute inset-0 w-full h-full rounded-xl bg-gray-200 animate-pulse" />
                <img
                    loading="lazy"
                    src="https://safebooru.org//samples/3611/sample_ad0a829f1ad1315fbad0f8098353c767d4289cd0.jpg"
                    alt="Imagem de personagem confuso"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
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