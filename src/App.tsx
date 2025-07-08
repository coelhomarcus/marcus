import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import PostPage from "./components/Blog/[slug]";
import CommandMenu from "./components/CommandMenu/CommandMenu";
import Certificates from "./components/Certificates/Certificates";
import Friends from "./components/Friends/Friends";

import { Toaster } from "@/components/ui/sonner";

import { useState } from "react";
import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-4 sm:px-6 sm:py-8 min-h-[100vh] space-y-3 max-w-[850px] mx-auto">
      <Header />
      <CommandMenu open={open} setOpen={setOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Footer setOpen={setOpen} />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Footer setOpen={setOpen} />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <Footer setOpen={setOpen} />
            </>
          }
        />
        <Route
          path="/friends"
          element={
            <>
              <Friends />
              <Footer setOpen={setOpen} />
            </>
          }
        />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route
          path="/certificates"
          element={
            <>
              <Certificates />
              <Footer setOpen={setOpen} />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster className="select-none" />
    </div>
  );
};

export default App;
