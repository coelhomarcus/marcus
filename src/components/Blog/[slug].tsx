import { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useParams, Link } from 'react-router';

import { arrBlog } from '../../utils/arrays';
import components from '../../utils/components';

import { PiSpinnerThin } from "react-icons/pi";

const posts = import.meta.glob('./posts/*.mdx')

const Post = () => {
    const { slug } = useParams();
    const post = arrBlog.find(p => p.slug === slug);
    const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(null)

    useEffect(() => {
        if (slug) {
            const path = `./posts/${slug}.mdx`
            const importer = posts[path]

            if (importer) {
                importer().then((mod) => {
                    const Component = (mod as { default: React.ComponentType }).default;
                    setMDXComponent(() => Component);
                })
            } else {
                setMDXComponent(() => () => <p className="text-red-500">Post não encontrado</p>)
            }
        }
    }, [slug])

    if (!MDXComponent || !post) return (
        <div className='flex items-center justify-center'>
            <PiSpinnerThin className="text-gray-300 animate-[spin_3s_linear_infinite] duration-150 size-6" />
        </div>
    )

    return (
        <div className='text-white'>
            <div className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 sm:items-center mt-5'>
                <h1 className='font-medium text-sm'>{post.title}</h1>
                <p className='text-xs text-neutral-400'>{post.date}</p>
            </div>

            <hr className="h-[calc(var(--spacing)_*_0.2)] border-t-0 bg-neutral-700 mt-2 mb-5" />

            <MDXProvider components={components}>
                <article className='prose'>
                    <MDXComponent />
                </article>
            </MDXProvider>

            <div className='flex justify-between items-center rounded-xl text-neutral-400 px-3 py-3 bg-neutral-90 border border-neutral-800'>
                <div>
                    <p className='flex items-center gap-2 text-sm text-neutral-200'>Marcus Coelho</p>
                    <p className='italic text-xs'>Espero que tenha gostado!</p>
                </div>
                <Link to="/blog" className='text-xs px-4 py-2 rounded-xl border border-neutral-800 hover:text-white transition-all duration-200'>Voltar pro Blog</Link>
            </div>
        </div>
    );
}

export default Post