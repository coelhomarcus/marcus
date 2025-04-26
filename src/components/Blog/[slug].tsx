import { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useParams, Link, useLocation } from 'react-router';

import { arrBlog } from '../../utils/data';
import components from '../../utils/components';
const posts = import.meta.glob('../../utils/posts/*.mdx')

import { PiSpinnerThin } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi";

const Post = () => {
    const { slug } = useParams();
    const post = arrBlog.find(p => p.slug === slug);
    const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(null)

    const [views, setViews] = useState(0);

    useEffect(() => {
        fetch(`https://api.cafuntalk.com:3002/views/${slug}`)
            .then(res => res.json())
            .then(data => {
                setViews(data.views || 0);
            })
            .catch(err => {
                console.error('Erro ao buscar views:', err);
            });
    }, [slug]);

    useEffect(() => {
        fetch(`https://api.cafuntalk.com:3002/views/${slug}`, {
            method: 'POST'
        }).catch(err => {
            console.error('Erro ao incrementar view:', err);
        });
    }, [slug]);

    useEffect(() => {
        if (slug) {
            const path = `../../utils/posts/${slug}.mdx`
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

    if (!MDXComponent) return (
        <div className='flex items-center justify-center'>
            <PiSpinnerThin className="text-gray-300 animate-[spin_3s_linear_infinite] duration-150 size-6 mt-10" />
        </div>
    )

    if (!post) return (
        <div className='flex flex-col justify-center mt-10 items-center gap-5'>
            <h1 className='text-center text-sm'>Esse post não existe!</h1>
            <p className='text-center text-xs text-neutral-400'>Talvez ele tenha sido removido ou nunca existiu.<br /> Você pode voltar e conferir outros posts disponíveis.</p>

            <div className="relative w-50 h-50 self-center">
                <div className="absolute inset-0 w-full h-full rounded-xl bg-neutral-900 animate-pulse" />
                <img
                    loading="lazy"
                    src="https://i.gifer.com/433p.gif"
                    alt="Personagem Confuso"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
            </div>

            <Link to="/blog" className='text-xs px-4 py-2 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white transition-all duration-200'>Voltar pro Blog</Link>
        </div>
    )

    return (
        <div className='text-white w-full'>
            <div className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 sm:items-center mt-5'>
                <h1 className='font-medium text-sm'>{post.title}</h1>
                {/* <p className='text-xs text-neutral-400'>{post.date}</p> */}
                <div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium opacity-100">
                    <HiOutlineEye /> {views}
                </div>
            </div>

            <hr className="h-[calc(var(--spacing)_*_0.2)] border-t-0 bg-neutral-700 mt-2 mb-5" />

            <MDXProvider components={components}>
                <article className='prose max-w-full'>
                    <ScrollToHashOnLoad />
                    <MDXComponent />
                </article>
            </MDXProvider>

            <div className='flex justify-between items-center space-y-2 mt-5 shadow-inner shadow-neutral-800 p-4 rounded-xl border -mx-3 border-neutral-900 text-neutral-400'>
                <div>
                    <p className='flex items-center gap-2 text-sm text-neutral-200'>Marcus Coelho</p>
                    <p className='text-xs'>Veja as outras postagens!</p>
                </div>
                <Link to="/blog" className='text-xs px-4 py-2 rounded-xl shadow-inner shadow-neutral-800 border border-neutral-800 hover:text-white transition-all duration-200 hover:bg-neutral-900/50'>Voltar pro Blog</Link>
            </div>
        </div>
    );
}

function ScrollToHashOnLoad() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
}

export default Post