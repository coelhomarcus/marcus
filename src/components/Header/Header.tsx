import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4">
      <NavLink to="/">
        <Avatar className="size-10 sm:size-12 hover:scale-110 transition-all duration-300">
          <AvatarImage className="object-cover" src="/src/icons/profile.webp" />
          <AvatarFallback className="size-10 sm:size-12">
            <FaUserAlt className="opacity-60 text-white" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
      </NavLink>

      <div className="flex gap-4 sm:gap-5 text-neutral-400 *:text-sm *:hover:text-white *:transition-colors">
        <HeaderLink title="Sobre" to="/" />
        <HeaderLink title="Projetos" to="/projects" />
        <HeaderLink title="Blog" to="/blog" />
      </div>
    </header>
  );
};

function HeaderLink({ to, title }: { to: string; title: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative inline-block transition-colors ${
          isActive ? "text-white" : "text-neutral-400"
        }`
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
