import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/avatar";
import SidebarDrawer from "@/lib/ui/vaul";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <header className="flex justify-between items-center mb-4">
            <NavLink to="/">
                <Avatar className="size-10 sm:size-14 hover:scale-105 active:scale-95 transition-all duration-100 rounded-xs">
                    <AvatarImage
                        className="object-cover"
                        src="https://i.pinimg.com/1200x/93/3f/ae/933fae092bcdc2943cdc8a19d02f2365.jpg"
                    />
                    <AvatarFallback className="size-10 sm:size-15 rounded-none">
                        <FaUserAlt className="opacity-60 text-white" aria-hidden="true" />
                    </AvatarFallback>
                </Avatar>
            </NavLink>

            <div className="flex items-center gap-4 sm:gap-5">
                <div className="hidden md:flex gap-4 sm:gap-5 text-neutral-400 *:text-sm *:hover:text-white *:transition-colors">
                    <HeaderLink title="Sobre" to="/" />
                    <HeaderLink title="Projetos" to="/projects" />
                    <HeaderLink title="Blog" to="/blog" />
                </div>

                <SidebarDrawer />
            </div>
        </header>
    );
};

function HeaderLink({ to, title }: { to: string; title: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `relative inline-block transition-colors ${isActive ? "text-white" : "text-neutral-400"}`
            }
        >
            {({ isActive }) => (
                <span className="relative">
                    {title}
                    <span
                        className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-500 ${
                            isActive ? "w-full" : "w-0"
                        }`}
                    ></span>
                </span>
            )}
        </NavLink>
    );
}

export default Header;
