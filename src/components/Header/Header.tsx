import { Link, NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/avatar";
import type { HeaderLinkProps } from "@/types";

import SidebarDrawer from "@/lib/ui/vaul";

import { RxPerson } from "react-icons/rx";

interface HeaderProps {
   isDark: boolean;
   toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
   return (
      <header className="flex justify-between items-center pt-4 pb-2">
         <Link to="/">
            <Avatar className="size-10 sm:size-14 hover:scale-105 active:scale-95 transition-all duration-200 rounded">
               <AvatarImage
                  className="object-cover"
                  src="./src/icons/avatar.webp"
                  alt="Avatar"
               />
               <AvatarFallback className="size-10 sm:size-15 rounded">
                  <RxPerson
                     className="opacity-60 text-foreground"
                     aria-hidden="true"
                  />
               </AvatarFallback>
            </Avatar>
         </Link>

         <div className="flex items-center gap-4 sm:gap-5">
            <div className="hidden md:flex gap-4 sm:gap-5 text-muted-foreground font-medium text-sm *:hover:text-foreground">
               <HeaderLink title="Sobre" to="/" />
               <HeaderLink title="Projetos" to="/projects" />
               <HeaderLink title="Blog" to="/blog" />
            </div>
            <SidebarDrawer isDark={isDark} toggleTheme={toggleTheme} />
         </div>
      </header>
   );
};

function HeaderLink({ to, title }: HeaderLinkProps) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) =>
            `relative inline-block transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`
         }
      >
         {({ isActive }) => (
            <span className="relative">
               {title}
               <span
                  className={`absolute left-0 bottom-0 h-[0.5px] bg-muted-foreground transition-all duration-100 ${isActive ? "w-full" : "w-0"
                     }`}
               ></span>
            </span>
         )}
      </NavLink>
   );
}

export default Header;
