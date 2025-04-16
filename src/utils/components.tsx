import React from 'react'

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
        <li className="text-neutral-400" {...props} />
    ),
}

export default components