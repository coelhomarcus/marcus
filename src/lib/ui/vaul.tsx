import React from "react";
import { Drawer } from "vaul-base";
import { NavLink } from "react-router";
import type { Page, SidebarLinkProps } from "@/types";

import { FiUser } from "react-icons/fi";
import { FaLaptopCode, FaRegFolderOpen, FaRegFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";
import { GoSidebarCollapse } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const navigation: Page[] = [
   { name: "Sobre", href: "/", icon: FiUser },
   { name: "Projetos", href: "/projects", icon: FaLaptopCode },
   { name: "Blog", href: "/blog", icon: FaRegFolderOpen },
   {
      name: "Curriculo",
      href: "https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf",
      icon: FaRegFilePdf,
      external: true,
      download: true,
   },
];

const socials: Page[] = [
   {
      name: "Email",
      href: "mailto:marcusrangelcoelho@gmail.com",
      icon: MdAlternateEmail,
      external: true,
   },
   { name: "GitHub", href: "https://github.com/coelhomarcus", icon: FaGithub, external: true },
   {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/coelhomarcus/",
      icon: FaLinkedin,
      external: true,
   },
   { name: "Twitter", href: "https://twitter.com/coelhoincode", icon: FaXTwitter, external: true },
];

const others: Page[] = [
   {
      name: "Certificados",
      href: "/certificates",
      icon: TbCertificate,
   },
];

const SidebarDrawer = () => {
   const [isOpen, setIsOpen] = React.useState(false);

   return (
      <Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
         <Drawer.Trigger
            render={(props) => (
               <button
                  {...props}
                  className="hover:*:text-foreground rounded-md transition-all cursor-pointer"
                  aria-label="Abrir menu"
                  onClick={() => setIsOpen(true)}
               >
                  <GoSidebarCollapse className="w-5 h-5 hidden md:block text-muted-foreground" />
                  <SlMenu className="w-5 h-5 block md:hidden text-muted-foreground" />
               </button>
            )}
         />
         <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/20 z-99" />
            <Drawer.Content className="bg-background text-foreground fixed right-0 top-0 z-100 flex h-full w-[90vw] flex-col border border-border sm:w-[70vw] lg:w-[400px]">
               <div className="flex flex-col h-full overflow-hidden">
                  <div className="flex justify-between items-center p-6 pb-4 flex-shrink-0">
                     <ThemeToggle />
                     <Drawer.Close className="p-2 hover:text-muted-foreground rounded-md transition-colors cursor-pointer">
                        ✕
                     </Drawer.Close>
                  </div>

                  <nav
                     className="flex flex-col space-y-8 flex-1 overflow-y-auto overflow-x-hidden px-6 py-4"
                     style={{ WebkitOverflowScrolling: "touch" }}
                  >
                     {/* Navegação Principal */}
                     <div>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                           Navegação
                        </h3>
                        <div className="space-y-1">
                           {navigation.map((item) => (
                              <SidebarLink key={item.name} item={item} onClose={() => setIsOpen(false)} />
                           ))}
                        </div>
                     </div>

                     {/* Redes Sociais */}
                     <div>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                           Contato
                        </h3>
                        <div className="space-y-1">
                           {socials.map((item) => (
                              <SidebarLink key={item.name} item={item} onClose={() => setIsOpen(false)} />
                           ))}
                        </div>
                     </div>

                     {/* Outros Links */}
                     <div>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                           Outros
                        </h3>
                        <div className="space-y-1">
                           {others.map((item) => (
                              <SidebarLink key={item.name} item={item} onClose={() => setIsOpen(false)} />
                           ))}
                        </div>
                     </div>
                  </nav>
               </div>
            </Drawer.Content>
         </Drawer.Portal>
      </Drawer.Root>
   );
};

function SidebarLink({ item, onClose }: SidebarLinkProps) {
   const Icon = item.icon;

   const handleDownload = () => {
      const link = document.createElement("a");
      link.href = item.href;
      link.download = item.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
   };

   if (item.external) {
      return (
         <button
            onClick={item.download ? handleDownload : undefined}
            className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors group w-full text-left cursor-pointer"
         >
            {item.download ? (
               <>
                  <div className="flex items-center space-x-3">
                     <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                     <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                        {item.name}
                     </span>
                  </div>
                  <MdOutlineFileDownload className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
               </>
            ) : (
               <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full"
                  onClick={onClose}
               >
                  <div className="flex items-center space-x-3">
                     <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                     <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                        {item.name}
                     </span>
                  </div>
                  <GoArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
               </a>
            )}
         </button>
      );
   }

   return (
      <NavLink
         to={item.href}
         onClick={onClose}
         className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-md transition-colors group ${isActive
               ? "bg-muted text-foreground border"
               : "hover:bg-muted text-muted-foreground border border-transparent"
            }`
         }
      >
         {({ isActive }) => (
            <>
               <Icon
                  className={`w-5 h-5 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                     }`}
               />
               <span
                  className={`text-sm font-medium transition-colors ${isActive ? "text-foreground" : "group-hover:text-foreground"
                     }`}
               >
                  {item.name}
               </span>
            </>
         )}
      </NavLink>
   );
}

export default SidebarDrawer;
