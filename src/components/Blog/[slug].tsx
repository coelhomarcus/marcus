import { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useParams } from 'react-router';

import { arrBlog } from '../../utils/arrays';
import components from '../../utils/components';

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

    if (!MDXComponent || !post) return <p className="text-gray-400">Carregando...</p>

    return (
        <div className='text-white'>
            <div className='flex justify-between items-center mt-5'>
                <h1 className='font-bold'>{post.title}</h1>
                <p className='text-xs text-neutral-400'>{post.date}</p>
            </div>

            <hr className="h-[calc(var(--spacing)_*_0.2)] border-t-0 bg-neutral-600 mt-2 mb-5" />

            <MDXProvider components={components}>
                <article className='prose'>
                    <MDXComponent />
                </article>
            </MDXProvider>
        </div>
    );
}

export default Post