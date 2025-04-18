import { Link } from "react-router"
import { arrBlog } from "../../utils/arrays"

const BlogCard = ({ slug, title, date, desc }: { slug: string, title: string, date: string, desc: string }) => {
    return <Link to={`/blog/${slug}`} key={slug} className="space-y-2 block shadow-inner shadow-neutral-800 p-4 rounded-lg border border-neutral-900 -mx-4 transition-colors hover:transition-none hover:bg-neutral-900">
        <div className="flex justify-between">
            <h1 className="text-sm font-medium">{title}</h1>
            <p className="text-xs text-neutral-400">{date}</p>
        </div>
        <p className="text-xs text-neutral-400">{desc}</p>
    </Link>
}

const Blog = () => {
    return (
        <div className="text-white">
            <h1 className='text-xl font-semibold mb-2'>Blog</h1>
            <p className='text-neutral-400 text-sm mb-4'>Meus preciosos pensamentos e inspirações.</p>
            <div className="space-y-4">
                {arrBlog.map((post) => {
                    return (
                        <BlogCard
                            slug={post.slug}
                            title={post.title}
                            date={post.date}
                            desc={post.desc} />)
                })}
            </div>
        </div>
    )
}

export default Blog