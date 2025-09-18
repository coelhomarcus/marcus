import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/avatar";

import SidebarDrawer from "@/lib/ui/vaul";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
   return (
      <header
         className={`sticky top-0 z-[50] flex justify-between items-center pt-4 pb-2 backdrop-blur-md`}
      >
         <NavLink to="/">
            <Avatar className="size-10 sm:size-14 hover:scale-105 active:scale-95 transition-all duration-100 rounded-sm">
               <AvatarImage className="object-cover" src="https://github.com/coelhomarcus.png" />
               <AvatarFallback className="size-10 sm:size-15 rounded-sm">
                  <FaUserAlt className="opacity-60 text-foreground" aria-hidden="true" />
               </AvatarFallback>
            </Avatar>
         </NavLink>

         <div className="flex items-center gap-4 sm:gap-5">
            <div className="hidden md:flex gap-4 sm:gap-5 text-muted-foreground *:text-sm *:hover:text-foreground *:transition-colors">
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
            `relative inline-block transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`
         }
      >
         {({ isActive }) => (
            <span className="relative">
               {title}
               <span
                  className={`absolute left-0 bottom-0 h-[1px] bg-foreground transition-all duration-100 ${isActive ? "w-full" : "w-0"
                     }`}
               ></span>
            </span>
         )}
      </NavLink>
   );
}

export default Header;
