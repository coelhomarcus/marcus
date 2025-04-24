import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReactElement } from 'react'

const components = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h1 className="text-neutral-100" {...props} />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h2 className="text-neutral-300" {...props} />
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h3 className="text-neutral-300" {...props} />
    ),
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
        <p className="prose-sm text-neutral-400" {...props} />
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
                    fontSize: '0.875rem',
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