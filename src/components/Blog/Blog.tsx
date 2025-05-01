import { Link } from "react-router"
import { arrBlog } from "../../utils/data"
import { MdAccessTime } from "react-icons/md";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const BlogCard = ({ slug, title, date, desc, time }: { slug: string, title: string, date: string, desc: string, time: number }) => {
    return <Link to={`/blog/${slug}`} key={slug} className="space-y-2 block shadow-inner shadow-neutral-800 p-4 rounded-lg border border-neutral-900 transition-colors hover:transition-none hover:bg-neutral-900">
        <div className="flex flex-col gap-2 md:flex-row md:gap-5 justify-between">
            <h1 className="text-sm font-medium">{title}</h1>
            <p className="text-xs text-neutral-400">{date}</p>
        </div>
        <p className="text-xs text-neutral-400">{desc}</p>
        <div className="flex cursor-pointer text-neutral-400">
            <div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium opacity-100">
                <MdAccessTime /> {time}m
            </div>
        </div>
    </Link>
}

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = arrBlog.filter((post) => {
        const searchContent = `${post.title} ${post.desc} ${post.tags?.join(" ")}`.toLowerCase();
        return searchContent.includes(searchTerm.toLowerCase());
    });

    return (
        <div className="text-white">
            <h1 className='text-xl font-semibold mb-2'>Blog</h1>
            <p className='text-neutral-400 text-sm mb-4'>Meus preciosos pensamentos e anotações.</p>

            <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-400">
                    <IoSearchSharp />
                </div>
                <input
                    type="text"
                    className="w-full p-2 pl-10 text-sm rounded-lg bg-neutral-950 border border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-800 text-neutral-200"
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
                            time={post.time}
                        />
                    ))
                ) : (
                    <p className="text-neutral-400 text-xs text-center py-4">Nenhum post encontrado.</p>
                )}
            </div>
        </div>
    )
}

export default Blog