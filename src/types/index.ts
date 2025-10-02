import { AnchorHTMLAttributes } from "react";
import type { IconType } from "react-icons"

export type RadixIconType = IconType;

// Data Types
export interface Project {
   href: string;
   name: string;
   desc: string;
   tech: string[];
}

export interface Work {
   company: string;
   role: string;
   duration: string;
   logo: string;
}

export interface Certificate {
   href: string;
   course: string;
   teacher: string;
}

export interface BlogPost {
   slug: string;
   title: string;
   desc: string;
   date: string;
   tags?: string[];
}

// Navigation Types
export interface Page {
   name: string;
   href: string;
   icon: React.ComponentType<{ className?: string }>;
   external?: boolean;
   download?: boolean;
}

// Component Props
export interface ProjectCardProps {
   href: string;
   name: string;
   desc: string;
   tech?: string[];
}

export interface PageTitleProps {
   title: string;
   suffix?: boolean;
}

export interface ContactLinkProps
   extends AnchorHTMLAttributes<HTMLAnchorElement> {
   Icon: RadixIconType;
   title: string;
   href: string;
}

export interface SimpleCardProps {
   href: string;
   name: string;
   desc: string;
}

export interface BlogCardProps {
   slug: string;
   title: string;
   date: string;
   desc: string;
   tags?: string[];
}

export interface SidebarLinkProps {
   item: Page;
   onClose: () => void;
}

export interface HeaderLinkProps {
   to: string;
   title: string;
}

// Theme Types
export type Theme = "light" | "dark";

// Utility Types
export interface CopyHookReturn {
   isCopied: boolean;
   handleCopy: () => void;
}

// MDX Component Types
export type HeadingProps = React.HTMLProps<HTMLHeadingElement>;

export interface PreComponentProps {
   children: React.ReactElement<{ className?: string; children: string }>;
   [key: string]: unknown;
}
