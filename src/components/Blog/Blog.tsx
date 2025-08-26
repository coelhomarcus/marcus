import { Link } from "react-router";
import { arrBlog } from "../../utils/data/posts";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import PageTitle from "@/components/PageTitle/PageTitle";

const BlogCard = ({
    slug,
    title,
    date,
    desc,
}: // tags,
{
    slug: string;
    title: string;
    date: string;
    desc: string;
    tags?: string[];
}) => {
    return (
        <Link
            to={`/blog/${slug}`}
            key={slug}
            className="group relative block rounded-[var(--radius)] p-4 transition-all duration-300 
      border border-neutral-900 hover:bg-neutral-900/40 shadow-inner shadow-neutral-900"
        >
            <div className="flex flex-col h-full">
                <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-white">{title}</h3>
                    <div className="flex items-center text-xs text-neutral-600">
                        <span className="font-medium">{date}</span>
                    </div>
                </div>

                <p className="text-sm text-neutral-400 flex-grow">{desc}</p>

                {/* <div className="mt-3 flex flex-col gap-3 sm:gap-0 sm:flex-row items-start justify-between sm:items-center">
                    {tags && tags.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                            {tags.slice(0, 2).map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-0.5 rounded-sm bg-neutral-800/30 text-neutral-500 border-neutral-800/30"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div> */}
            </div>
        </Link>
    );
};

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = arrBlog.filter((post) => {
        const searchContent = `${post.title} ${post.desc} ${post.tags?.join(" ")}`.toLowerCase();
        return searchContent.includes(searchTerm.toLowerCase());
    });

    return (
        <div className="text-white">
            <PageTitle title="Blog" />
            <h1 className="text-xl font-semibold mb-2">Blog</h1>
            <p className="text-neutral-400 text-sm mb-4">Meus preciosos pensamentos e anotações.</p>
            <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-400">
                    <IoSearchSharp />
                </div>
                <input
                    type="text"
                    className="w-full p-2 pl-10 text-sm rounded-[var(--radius)] bg-neutral-950 border border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-800 text-neutral-200"
                    placeholder="Buscar posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="space-y-4">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            date={post.date}
                            desc={post.desc}
                            tags={post.tags}
                        />
                    ))
                ) : (
                    <p className="text-neutral-400 text-xs text-center py-4">Nenhum post encontrado.</p>
                )}
            </div>
            <div className="hidden sm:flex flex-wrap gap-2 mt-6 justify-center *:h-8 *:w-auto">
                <img
                    src="https://64.media.tumblr.com/e8badceece899ec45fd02b2254447a99/7e5253eadd3d7fba-b4/s400x600/41c70dee5725f192ee0b6fa0d542081af392b0f4.gif"
                    alt="Ramburg"
                />
                <img src="https://zanarkand.neocities.org/foryou/fubutton16.gif" alt="Lain" />
                <img
                    src="https://64.media.tumblr.com/beb1f92611396501e6370766e57257dc/383f2ec0107b49e1-40/s250x400/05f5405f94c2cf821ca334098a1453a0fac51628.gif"
                    alt="yup"
                />
                <img src="https://zanarkand.neocities.org/foryou/fubutton41.gif" alt="miku" />
                <img
                    src="https://64.media.tumblr.com/f2584e32d350466339963d1e6b28dbd7/35d9fec982b7632d-12/s250x400/ff1fdcf6b6b4fd43444fd20773e68f456b8c89bd.png"
                    alt="dokidoki"
                />
                <img src="https://zanarkand.neocities.org/foryou/fubutton35.gif" alt="pudi" />
                <img
                    src="https://64.media.tumblr.com/fbcc3097744dc24b59b9fba05feb39e7/69b1b2e416f3c892-15/s400x600/ad2fba34a9e2e9f1a66b07997c349af1ee249d2a.gifv"
                    alt="openeye"
                />
                <img src="https://ranfren.neocities.org/bestview.gif" alt="eye" />
                <img src="https://zanarkand.neocities.org/mybuttons/banner5.gif" alt="love soda" />
                <img
                    src="https://cybersparkle.neocities.org/d1s993h-0bb43478-6b47-49f8-8828-a549652f9a7a.gif"
                    alt="girl"
                />
                <img
                    src="https://64.media.tumblr.com/2c615594e837f99a9ce6a244ea348ac2/90b3618720570f23-23/s500x750/3968340e882cace9d3e35e833b8169c42815ff1e.gifv"
                    alt=""
                />
                <img src="https://graphic.neocities.org/emailme.gif" alt="computer" />
            </div>
        </div>
    );
};

export default Blog;
