import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReactElement } from 'react'

import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD') // Remove acentos
        .replace(/[\u0300-\u036f]/g, '') // Regex pra remover diacríticos
        .replace(/[^a-z0-9 -]/g, '') // Remove símbolos
        .trim()
        .replace(/\s+/g, '-') // Espaços viram hífens
}

const components = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children))

        const handleClick = () => {
            const url = `${window.location.origin}${window.location.pathname}#${id}`;
            navigator.clipboard.writeText(url);
        };

        return (
            <h1 id={id} className="scroll-mt-4">
                <a href={`#${id}`} className="heading-link font-bold text-neutral-300 no-underline" onClick={handleClick}>
                    {props.children}
                </a>
            </h1>
        )
    },
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children))

        const handleClick = () => {
            const url = `${window.location.origin}${window.location.pathname}#${id}`;
            navigator.clipboard.writeText(url);
        };

        return (
            <h2 id={id} className="scroll-mt-4">
                <a href={`#${id}`} className="heading-link text-neutral-300 no-underline font-bold" onClick={handleClick}>
                    {props.children}
                </a>
            </h2>
        )
    },
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children))

        const handleClick = () => {
            const url = `${window.location.origin}${window.location.pathname}#${id}`;
            navigator.clipboard.writeText(url);
        };

        return (
            <h3 id={id} className="scroll-mt-4">
                <a href={`#${id}`} className="heading-link text-neutral-300 no-underline font-semibold" onClick={handleClick}>
                    {props.children}
                </a>
            </h3>
        )
    },
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
        <p className="prose-sm text-neutral-400" {...props} />
    ),
    a: (props: React.HTMLProps<HTMLAnchorElement>) => (
        <a className="prose-sm font-normal text-blue-400" {...props} />
    ),
    ul: (props: React.HTMLProps<HTMLUListElement>) => (
        <ul className="text-neutral-400" {...props} />
    ),
    li: (props: React.HTMLProps<HTMLLIElement>) => (
        <li className="text-neutral-400 text-sm" {...props} />
    ),

    pre: ({
        children,
        ...rest
    }: {
        children: ReactElement<{ className?: string; children: string }>
    }) => {
        const child = children.props
        const language = child.className?.replace('language-', '') || 'text'
        const code = child.children.trim?.() || ''

        return (
            <SyntaxHighlighter
                language={language}
                style={theme}
                customStyle={{
                    background: '#0A0A0A',
                    padding: '1rem',
                    fontSize: '0.825rem',
                }}
                className="rounded bg-background border border-foreground/10 scrollbar scrollbar-content"
                {...rest}
            >
                {code}
            </SyntaxHighlighter>
        )
    },

    code: (props: React.HTMLProps<HTMLElement>) => (
        <code className="font-medium font-[IBM_Plex_Mono]" {...props} />
    ),

    strong: (props: React.ComponentProps<'strong'>) => (
        <strong className="text-neutral-200 font-medium" {...props} />
    ),
}

export default components