import { CiLight, CiDark } from "react-icons/ci";

interface ThemeToggleProps {
   isDark: boolean;
   toggleTheme: () => void;
}

const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => {
   return (
      <button
         onClick={toggleTheme}
         className="p-2 rounded-md hover:bg-muted transition-all duration-100 group cursor-pointer"
         aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
      >
         <div className="relative w-6 h-6">
            <CiLight
               className={`w-6 h-6 absolute inset-0 transition-all duration-100 text-muted-foreground group-hover:text-foreground ${isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
            />
            <CiDark
               className={`w-6 h-6 absolute inset-0 transition-all duration-100 text-muted-foreground group-hover:text-foreground ${isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
            />
         </div>
      </button>
   );
};

export default ThemeToggle;
