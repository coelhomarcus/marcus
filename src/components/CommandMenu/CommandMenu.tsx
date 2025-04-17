import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { IoHome } from "react-icons/io5";
import { FaCodeBranch, FaFolder, FaFileAlt, FaGithub } from "react-icons/fa";
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

const pages: Page[] = [
    { name: 'Sobre', href: '/', icon: IoHome },
    { name: 'Projetos', href: '/projects', icon: FaCodeBranch },
    { name: 'Blog', href: '/blog', icon: FaFolder },
    { name: 'GitHub', href: 'https://github.com/coelhomarcus', icon: FaGithub },
    { name: 'b/cafuntalk', href: '/blog/cafuntalk', icon: FaFileAlt },
    { name: 'b/Jogos', href: '/blog/my-gamer-side', icon: FaFileAlt },
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
        if (href.startsWith('http')) {
            window.open(href, '_blank')
        } else {
            navigate(href)
        }
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Pesquise..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navegação">
                    {pages.map((page) => (
                        <CommandItem key={page.href} onSelect={() => handleSelect(page.href)}>
                            <page.icon className="mr-2 h-4 w-4" />
                            {page.name}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}


