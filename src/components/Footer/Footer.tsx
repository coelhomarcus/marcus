import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import ContactLink from "../ContactLink/ContactLink";

const Footer = () => {
    return (
        <div className="flex justify-between border-t mt-4 pt-4 border-border">
            <div className="flex gap-3 text-foreground">
                <ContactLink
                    title="Github"
                    Icon={LuGithub}
                    href="https://github.com/coelhomarcus"
                    rel="noreferrer noopener"
                    target="_blank"
                />
                <ContactLink
                    title="Linkedin"
                    Icon={FaLinkedin}
                    href="https://www.linkedin.com/in/coelhomarcus/"
                    rel="noreferrer noopener"
                    target="_blank"
                />
                <ContactLink
                    title="CV"
                    Icon={IoDocumentText}
                    href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf"
                    download
                />
            </div>
            <a
                href="https://github.com/coelhomarcus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground hover:text-muted-foreground"
            >
                @coelhomarcus
            </a>
        </div>
    );
};

export default Footer;
