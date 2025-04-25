import { IconType } from "react-icons";
import { AnchorHTMLAttributes } from "react";

interface ContactLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    Icon: IconType;
    title: string;
    href: string;
}

const ContactLink = ({ Icon, title, href, ...props }: ContactLinkProps) => {
    return (
        <a
            href={href}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-400"
            {...props}
        >
            <Icon className="size-4" />
            {title}
        </a>
    );
};

export default ContactLink;
