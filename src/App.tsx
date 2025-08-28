import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import PostPage from "./components/Blog/[slug]";
import Certificates from "./components/Certificates/Certificates";
import Friends from "./components/Friends/Friends";
import Vault from "./components/Vault/Vault";

import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="px-4 py-4 sm:px-6 sm:py-8 min-h-[100vh] space-y-3 max-w-[850px] mx-auto">
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/vault" element={<Vault />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
