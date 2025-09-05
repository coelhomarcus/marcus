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
            <p className="text-neutral-400 text-sm mb-4">Meus pensamentos e anotações.</p>
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
            <div className="invisible md:visible mt-4 *:w-full">
                {/* <img src="https://pixelsafari.neocities.org/dividers/sparkles6.gif" alt="" /> */}
                <img src="https://pixelsafari.neocities.org/dividers/animal/cat2.gif" alt="" />
            </div>
        </div>
    );
};

export default Blog;
