import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { IoHomeOutline } from "react-icons/io5";
import { FaCodeBranch, FaRegFolderOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiTextAlignJustify } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdAlternateEmail } from 'react-icons/md';



import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"


type Page = {
    name: string
    href: string
    icon: React.ComponentType<{ className?: string }>
}

const navigation: Page[] = [
    { name: 'Sobre', href: '/', icon: IoHomeOutline },
    { name: 'Projetos', href: '/projects', icon: FaCodeBranch },
    { name: 'Blog', href: '/blog', icon: FaRegFolderOpen },
]

const socials: Page[] = [
    { name: 'GitHub', href: 'https://github.com/coelhomarcus', icon: FaGithub },
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/coelhomarcus/', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:marcusrangelcoelho@gmail.com', icon: MdAlternateEmail },
]

const posts: Page[] = [
    { name: 'Meu primeiro site de bate-papo', href: '/blog/cafuntalk', icon: CiTextAlignJustify },
    { name: 'Jogos me trouxeram até aqui', href: '/blog/my-gamer-side', icon: CiTextAlignJustify },
]

const projects: Page[] = [
    { name: 'Cafuntalk', href: 'https://cafuntalk.com', icon: RiExternalLinkLine },
    { name: 'SOS Queimadas', href: 'https://www.youtube.com/shorts/0fSoHjAadas', icon: RiExternalLinkLine },
    { name: 'Blob', href: 'https://blob-temp.vercel.app/', icon: RiExternalLinkLine },
    { name: 'BunnyBash', href: 'https://coelhomarcus.github.io/bunnybash/', icon: RiExternalLinkLine },
    { name: 'BakaNeo', href: 'https://marketplace.visualstudio.com/items?itemName=coelhomarcus.bakaneo', icon: RiExternalLinkLine },
]

export default function CommandMenu() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

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
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Navegação">
                        {navigation.map((page) => (
                            <CommandItem key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Redes">
                        {socials.map((page) => (
                            <CommandItem key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Projetos">
                        {projects.map((page) => (
                            <CommandItem key={page.href} onSelect={() => handleSelect(page.href)}>
                                <page.icon className="mr-2 h-4 w-4" />
                                {page.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Posts">
                        {posts.map((page) => (
                            <CommandItem key={page.href} onSelect={() => handleSelect(page.href)}>
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


