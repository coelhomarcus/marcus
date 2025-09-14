import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDarkTheme = savedTheme ? savedTheme === "dark" : true;

        setIsDark(isDarkTheme);
        applyTheme(isDarkTheme);

        if (!savedTheme) {
            localStorage.setItem("theme", "dark");
        }
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
