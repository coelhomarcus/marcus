import { Link } from "react-router"

import { arrBlog } from "../../utils/arrays"

const Blog = () => {
    return (
        <div className="text-white">
            <h1 className='text-xl font-semibold mb-2'>Blog</h1>
            <p className='text-neutral-400 text-sm mb-4'>
                Meus preciosos pensamentos e inspirações.
            </p>
            <div className="space-y-4">
                {arrBlog.map((post) => {
                    return <Link to={`/blog/${post.slug}`} key={post.slug} className="space-y-2 block shadow-inner shadow-neutral-800 p-4 rounded-lg border border-neutral-900 -mx-4 transition-colors hover:transition-none hover:bg-neutral-900">
                        <div className="flex justify-between">
                            <h1 className="text-sm font-medium">{post.title}</h1>
                            <p className="text-xs text-neutral-400">{post.date}</p>
                        </div>
                        <p className="text-xs text-neutral-400">{post.desc}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Blog