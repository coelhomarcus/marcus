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

            <div className="flex gap-5 text-neutral-400 *:text-sm *:hover:text-white *:transition-colors">
                <HeaderLink title="Sobre" to="/" />
                <HeaderLink title="Projetos" to="/projects" />
                <HeaderLink title="Blog" to="/blog" />
            </div>
        </div>
    )
}

function HeaderLink({ to, title }: { to: string, title: string }) {
    return <NavLink
        to={to}
        className={({ isActive }) =>
            `relative inline-block text-sm transition-colors ${isActive ? "text-white" : "text-neutral-400"
            }`
        }
    >
        {({ isActive }) => (
            <span className="relative">
                {title}
                <span
                    className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-500 ${isActive ? "w-full" : "w-0"
                        }`}
                ></span>
            </span>
        )}
    </NavLink>
}

export default Header

