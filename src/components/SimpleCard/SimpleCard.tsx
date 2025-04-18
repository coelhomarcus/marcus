const SimpleCard = ({ href, name, desc }: { href: string, name: string, desc: string }) => {
    return <a href={href}
        className="block rounded-xl text-neutral-400 shadow-inner shadow-neutral-800 -mx-4 p-4 transition-colors hover:bg-neutral-900 hover:text-neutral-200 border border-neutral-800"
        rel="noreferrer noopener"
        target="_blank">
        <p className="text-sm text-neutral-100 font-medium">{name}</p>
        <p className="text-sm">{desc}</p>
    </a>
}

export default SimpleCard