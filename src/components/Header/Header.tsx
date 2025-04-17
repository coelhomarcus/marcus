import { NavLink } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header = () => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <NavLink to="/">
                <Avatar className="hover:scale-110 transition-all">
                    <AvatarImage src="/icons/profile.jpg" />
                    <AvatarFallback>MC</AvatarFallback>
                </Avatar>
            </NavLink>
            <div className='flex gap-5 text-neutral-400 *:text-sm *:hover:text-white *:transition-colors'>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-white underline" : ""}>
                    Sobre
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-white underline" : ""}>
                    Projetos
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-white underline" : ""}>
                    Blog
                </NavLink>
            </div>

        </div>
    )
}

export default Header