import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const THEME_CHANGE_EVENT = "theme-changed";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Verificar se já há preferência salva
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            const isDarkTheme = savedTheme === "dark";
            setIsDark(isDarkTheme);
            applyTheme(isDarkTheme);
        } else {
            // Se não houver preferência salva, usar a preferência do sistema
            setIsDark(prefersDark);
            applyTheme(prefersDark);
        }

        // Escutar mudanças na preferência do sistema
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                setIsDark(e.matches);
                applyTheme(e.matches);
            }
        };

        // Escutar eventos de mudança de tema de outras instâncias
        const handleThemeChange = (e: CustomEvent) => {
            setIsDark(e.detail.isDark);
        };

        mediaQuery.addEventListener("change", handleChange);
        window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange as EventListener);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange as EventListener);
        };
    }, []);

    const applyTheme = (dark: boolean) => {
        const html = document.documentElement;
        const body = document.body;

        if (dark) {
            html.classList.add("dark");
            body.classList.add("dark");
        } else {
            html.classList.remove("dark");
            body.classList.remove("dark");
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");

        // Notificar outras instâncias sobre a mudança de tema
        window.dispatchEvent(
            new CustomEvent(THEME_CHANGE_EVENT, {
                detail: { isDark: newTheme },
            })
        );
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted transition-all duration-200 group cursor-pointer"
            aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
            <div className="relative w-5 h-5">
                <FiSun
                    className={`w-5 h-5 absolute inset-0 transition-all duration-300 text-muted-foreground group-hover:text-foreground ${
                        isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                />
                <FiMoon
                    className={`w-5 h-5 absolute inset-0 transition-all duration-300 text-muted-foreground group-hover:text-foreground ${
                        isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;
