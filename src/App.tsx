import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import PostPage from "./components/Blog/[slug]";
import Certificates from "./components/Certificates/Certificates";

import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
   const [isDark, setIsDark] = useState(true);

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

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      const isDarkTheme = savedTheme ? savedTheme === "dark" : true;

      setIsDark(isDarkTheme);
      applyTheme(isDarkTheme);

      if (!savedTheme) {
         localStorage.setItem("theme", "dark");
      }
   }, []);

   return (
      <div className="px-4 py-4 sm:px-6 sm:py-8 min-h-[100vh] space-y-3 max-w-[900px] mx-auto">
         <Header isDark={isDark} toggleTheme={toggleTheme} />
         <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </div>
   );
};

export default App;
