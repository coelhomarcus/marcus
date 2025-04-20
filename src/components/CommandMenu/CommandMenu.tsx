import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut
} from "@/components/ui/command"

import { FaLaptopCode, FaRegFolderOpen, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { CiTextAlignJustify } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdAlternateEmail } from 'react-icons/md';
import { TbCertificate } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";


import isMac from '@/utils/isMac';

type Page = {
    name: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    shortcut?: string
}

const navigation: Page[] = [
    { name: 'Sobre', href: '/', icon: FiUser, shortcut: "1" },
    { name: 'Projetos', href: '/projects', icon: FaLaptopCode, shortcut: "2" },
    { name: 'Blog', href: '/blog', icon: FaRegFolderOpen, shortcut: "3" },
    { name: 'Certificados', href: '/certificates', icon: TbCertificate, shortcut: "4" },
]

const socials: Page[] = [
    { name: 'Email', href: 'mailto:marcusrangelcoelho@gmail.com', icon: MdAlternateEmail },
    { name: 'GitHub', href: 'https://github.com/coelhomarcus', icon: FaGithub },
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/coelhomarcus/', icon: FaLinkedin },
    { name: 'Discord', href: 'https://discord.com/invite/YDSGKzaSDe', icon: FaDiscord },
]

const projects: Page[] = [
    { name: 'Cafuntalk', href: 'https://cafuntalk.com', icon: RiExternalLinkLine },
    { name: 'SOS Queimadas', href: 'https://www.youtube.com/shorts/0fSoHjAadas', icon: RiExternalLinkLine },
    { name: 'Blob', href: 'https://blob-temp.vercel.app/', icon: RiExternalLinkLine },
    { name: 'BunnyBash', href: 'https://coelhomarcus.github.io/bunnybash/', icon: RiExternalLinkLine },
    { name: 'BakaNeo', href: 'https://marketplace.visualstudio.com/items?itemName=coelhomarcus.bakaneo', icon: RiExternalLinkLine },
]

const posts: Page[] = [
    { name: 'Aprendendo GO', href: '/blog/learning-go', icon: CiTextAlignJustify },
    { name: 'Meu primeiro site de bate-papo', href: '/blog/cafuntalk', icon: CiTextAlignJustify },
    { name: 'Jogos me trouxeram até aqui', href: '/blog/my-gamer-side', icon: CiTextAlignJustify },
]

const others: Page[] = [
    { name: 'Curriculo', href: 'https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf', icon: FaRegFilePdf },
]

export default function CommandMenu({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const navigate = useNavigate()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
            else if (e.key === "1" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                navigate("/")
                setOpen(false);
            }
            else if (e.key === "2" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                navigate("/projects")
                setOpen(false);
            }
            else if (e.key === "3" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                navigate("/blog")
                setOpen(false);
            }
            else if (e.key === "4" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                navigate("/certificates")
                setOpen(false);
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [navigate, setOpen])

    const handleSelect = (href: string) => {
        setOpen(false)
        if (href.startsWith('http') || href.startsWith('mailto:')) {
            window.open(href, '_blank')
        } else {
            navigate(href)
        }
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Pesquise..." />
            <div className='scrollbar-container'>
                <CommandList className='scrollbar-content bg-popover'>
                    <CommandEmpty>Sem resultados.</CommandEmpty>
                    <CommandGroup heading="Navegação">
                        {navigation.map((page) => (
                            <CommandItem className='cursor-pointer' key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                                {page.shortcut && <CommandShortcut>{isMac() ? "⌘" : "Ctrl"} {page.shortcut}</CommandShortcut>}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Redes Sociais">
                        {socials.map((page) => (
                            <CommandItem className='cursor-pointer' key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Projetos">
                        {projects.map((page) => (
                            <CommandItem className='cursor-pointer' key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Posts">
                        {posts.map((page) => (
                            <CommandItem className='cursor-pointer' key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Outros">
                        {others.map((page) => (
                            <CommandItem className='cursor-pointer' key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </div>
        </CommandDialog>
    )
}


