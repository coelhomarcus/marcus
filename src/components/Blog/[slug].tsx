import { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useParams, Link, useLocation } from "react-router";
import PageTitle from "@/components/PageTitle/PageTitle";

import { FaChevronLeft } from "react-icons/fa";

import { arrBlog } from "../../utils/data/posts";
import components from "../../utils/components";
const posts = import.meta.glob("../../utils/posts/*.mdx");

import { PiSpinnerThin } from "react-icons/pi";

const Post = () => {
    const { slug } = useParams();
    const post = arrBlog.find((p) => p.slug === slug);
    const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(null);
    const [titleClicked, setTitleClicked] = useState(false);

    useEffect(() => {
        if (slug) {
            const path = `../../utils/posts/${slug}.mdx`;
            const importer = posts[path];

            if (importer) {
                importer().then((mod) => {
                    const Component = (mod as { default: React.ComponentType }).default;
                    setMDXComponent(() => Component);
                });
            } else {
                setMDXComponent(() => () => <p className="text-red-500">Post não encontrado</p>);
            }
        }
    }, [slug]);

    if (!MDXComponent)
        return (
            <div className="flex items-center justify-center">
                <PiSpinnerThin className="text-gray-300 animate-[spin_3s_linear_infinite] duration-150 size-6 mt-10" />
            </div>
        );

    if (!post)
        return (
            <div className="flex flex-col justify-center mt-10 items-center gap-2">
                <h1 className="text-center text-base text-neutral-100">Esse post não existe!</h1>
                <p className="text-center text-sm text-neutral-400">
                    Talvez ele tenha sido removido ou nunca existiu.
                    <br /> Você pode voltar e conferir outros posts disponíveis.
                </p>

                <div className="relative w-50 h-50 self-center">
                    <div className="absolute inset-0 w-full h-full rounded-xl bg-neutral-900 animate-pulse" />
                    <img
                        loading="lazy"
                        src="https://i.pinimg.com/736x/d1/b4/b8/d1b4b80e6c7feb00a2bb1814b4a60650.jpg"
                        alt="Personagem Confuso"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                </div>

                <Link
                    to="/blog"
                    className="text-xs px-4 py-2 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white transition-all duration-200"
                >
                    Voltar pro Blog
                </Link>
            </div>
        );
    return (
        <div className="text-white w-full">
            {post && <PageTitle title={post.title} />}

            <div className="mt-4 flex justify-between mb-2">
                <Link
                    to="/blog"
                    className="text-sm text-neutral-400 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                    <FaChevronLeft className="inline" /> Voltar
                </Link>
                <button
                    className="flex items-center gap-8 cursor-pointer hover:text-neutral-300"
                    onClick={() => {
                        const currentUrl = window.location.href;
                        navigator.clipboard.writeText(currentUrl);
                        setTitleClicked(true);
                        setTimeout(() => {
                            setTitleClicked(false);
                            console.log("teste");
                        }, 1500);
                    }}
                >
                    {titleClicked ? "Link Copiado!" : post.title}
                </button>
                <div className="hidden sm:flex sm:gap-0 items-center text-neutral-500 text-sm">
                    <span>{post.date}</span>
                </div>
            </div>

            <hr className="h-px border-0 bg-neutral-800/50 mb-5" />

            <MDXProvider components={components}>
                <article className="prose max-w-full">
                    <ScrollToHashOnLoad />
                    <MDXComponent />
                </article>
            </MDXProvider>

            <div className="flex justify-between items-center space-y-2 mt-5 shadow-inner shadow-neutral-800 p-4 rounded-xl border -mx-3 border-neutral-900 text-neutral-400">
                <div>
                    <p className="flex items-center gap-2 text-sm text-neutral-200">Marcus Coelho</p>
                    <p className="text-xs">Veja as outras postagens!</p>
                </div>
                <Link
                    to="/blog"
                    className="text-xs px-4 py-2 rounded-xl shadow-inner shadow-neutral-800 border border-neutral-800 hover:text-white transition-all duration-200 hover:bg-neutral-900/50"
                >
                    Voltar pro Blog
                </Link>
            </div>
        </div>
    );
};

function ScrollToHashOnLoad() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
}

export default Post;
