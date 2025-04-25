import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <NavLink to="/">
                <div className="relative">
                    <Avatar className="size-10">
                        <AvatarImage src="/icons/profile.jpg" />
                        <AvatarFallback className="size-10">
                            <FaUserAlt className="opacity-60 text-white" aria-hidden="true" />
                        </AvatarFallback>
                    </Avatar>
                    <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
                        <span className="sr-only">Online</span>
                    </span>
                </div>
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

