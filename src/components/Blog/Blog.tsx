import { Link } from "react-router"
import { arrBlog } from "../../utils/data"
import { MdAccessTime } from "react-icons/md";

const BlogCard = ({ slug, title, date, desc, time }: { slug: string, title: string, date: string, desc: string, time: number }) => {
    return <Link to={`/blog/${slug}`} key={slug} className="space-y-2 block shadow-inner shadow-neutral-800 p-4 rounded-lg border border-neutral-900 -mx-4 transition-colors hover:transition-none hover:bg-neutral-900">
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
    return (
        <div className="text-white">
            <h1 className='text-xl font-semibold mb-2'>Blog</h1>
            <p className='text-neutral-400 text-sm mb-4'>Meus preciosos pensamentos e anotações.</p>
            <div className="space-y-4">
                {arrBlog.map((post) => {
                    return (
                        <BlogCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            date={post.date}
                            desc={post.desc}
                            time={post.time} />)
                })}
            </div>
        </div>
    )
}

export default Blog