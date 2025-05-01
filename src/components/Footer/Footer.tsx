import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText, IoSearchSharp } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";
import isMac from "@/utils/isMac";
import ContactLink from "../ContactLink/ContactLink";


const Footer = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="flex justify-between border-t mt-4 pt-4 border-neutral-800">
            <div className="flex gap-3 text-white">
                <ContactLink title="CV" Icon={IoDocumentText} href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf" download />
                <ContactLink title="Github" Icon={FaGithub} href="https://github.com/coelhomarcus" />
                <ContactLink title="Linkedin" Icon={FaLinkedin} href="https://www.linkedin.com/in/coelhomarcus/" />
            </div>
            <button className="cursor-pointer text-neutral-400 hover:text-neutral-500 transition-all duration-200" onClick={() => setOpen(true)}>
                <div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium  opacity-100">
                    <IoSearchSharp />
                    <p className="hidden sm:flex gap-1 items-center">{isMac() ? <MdKeyboardCommandKey /> : "Ctrl"} K</p>
                </div>
            </button>
        </div>
    )
}

export default Footer