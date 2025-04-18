const components = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h1 className="text-neutral-100" {...props} />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h2 className="text-neutral-300"  {...props} />
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h3 className="text-neutral-300" {...props} />
    ),
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
        <p className="prose-sm text-neutral-400" {...props} />
    ),
    ul: (props: React.HTMLProps<HTMLUListElement>) => (
        <ul className=" text-neutral-400" {...props} />
    ),
    li: (props: React.HTMLProps<HTMLLIElement>) => (
        <li className="text-neutral-400 text-sm" {...props} />
    ),
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
        <pre className="text-neutral-400 bg-background border border-foreground/10 scrollbar scrollbar-content" {...props} />
    ),
    code: (props: React.HTMLProps<HTMLPreElement>) => (
        <code className="text-neutral-300 italic font-medium" {...props} />
    ),
}

export default components