import { NavLink } from "react-router"

const Header = () => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <NavLink to="/">
                <img className="size-8 rounded-full" src="https://avatars.githubusercontent.com/u/106438089?v=4" alt="Foto do Marcus" />
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