import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUserAlt } from "react-icons/fa";
// import { BiSearch } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";



const Header = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <NavLink to="/">
                <div className="relative">
                    <Avatar className="size-8 sm:size-10">
                        <AvatarImage src="/icons/profile.jpg" />
                        <AvatarFallback className="size-10">
                            <FaUserAlt className="opacity-60 text-white" aria-hidden="true" />
                        </AvatarFallback>
                    </Avatar>
                    <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-lime-400">
                        <span className="sr-only">Online</span>
                    </span>
                </div>
            </NavLink>

            <div className="flex gap-2 sm:gap-5 text-neutral-400 *:text-sm *:hover:text-white *:transition-colors">
                <button onClick={() => setOpen(true)} className="md:hidden flex items-center mr-3 mt-1">
                    <IoSearchSharp className="text-neutral-400 hover:text-white transition-colors text-[1rem]" />
                </button>
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

