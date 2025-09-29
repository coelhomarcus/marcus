import ContactLink from "../ContactLink/ContactLink";

import {
   GitHubLogoIcon,
   LinkedInLogoIcon,
   ReaderIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
   return (
      <div className="flex justify-between border-t mt-4 pt-4 border-border">
         <div className="flex gap-3 text-foreground">
            <ContactLink
               title="Github"
               Icon={GitHubLogoIcon}
               href="https://github.com/coelhomarcus"
               rel="noreferrer noopener"
               target="_blank"
            />
            <ContactLink
               title="Linkedin"
               Icon={LinkedInLogoIcon}
               href="https://www.linkedin.com/in/coelhomarcus/"
               rel="noreferrer noopener"
               target="_blank"
            />
            <ContactLink
               title="CV"
               Icon={ReaderIcon}
               href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf"
               download
            />
         </div>
         <a
            href="https://github.com/coelhomarcus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground hover:text-accent-foreground hidden sm:block"
         >
            @coelhomarcus
         </a>
      </div>
   );
};

export default Footer;
