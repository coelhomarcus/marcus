import { IconType } from "react-icons"

const ContactLink = ({ Icon, title, href }: { Icon: IconType, title: string, href: string }) => {
    return <a href={href} rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-400">
        <Icon className="size-4" />
        {title}
    </a>
}

export default ContactLink;