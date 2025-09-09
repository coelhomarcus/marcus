import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReactElement } from "react";
import { GoCopy } from "react-icons/go";
import { CgExternal } from "react-icons/cg";

import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";

SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("ts", tsx);
SyntaxHighlighter.registerLanguage("js", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 -]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

const createHeadingClickHandler = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        history.pushState(null, "", `#${id}`);
    }

    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
};

const components = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children));

        return (
            <h1 id={id} className="scroll-mt-4">
                <a
                    href={`#${id}`}
                    className="heading-link text-neutral-300 no-underline font-semibold active:text-neutral-500 cursor-pointer select-none"
                    onClick={createHeadingClickHandler(id)}
                >
                    {props.children}
                </a>
            </h1>
        );
    },
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children));

        return (
            <h2 id={id} className="scroll-mt-4 mb-2.5">
                <a
                    href={`#${id}`}
                    className="heading-link text-neutral-300 no-underline font-semibold active:text-neutral-500 cursor-pointer select-none"
                    onClick={createHeadingClickHandler(id)}
                >
                    {props.children}
                </a>
            </h2>
        );
    },
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children));

        return (
            <h3 id={id} className="scroll-mt-4">
                <a
                    href={`#${id}`}
                    className="heading-link text-neutral-300 no-underline font-semibold active:text-neutral-400 cursor-pointer select-none"
                    onClick={createHeadingClickHandler(id)}
                >
                    {props.children}
                </a>
            </h3>
        );
    },
    h4: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = slugify(String(props.children));

        return (
            <h4 id={id} className="scroll-mt-4">
                <a
                    href={`#${id}`}
                    className="heading-link text-neutral-300 no-underline font-semibold active:text-neutral-400 cursor-pointer select-none"
                    onClick={createHeadingClickHandler(id)}
                >
                    {props.children}
                </a>
            </h4>
        );
    },
    p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className="prose-base text-neutral-400" {...props} />,
    a: (props: React.HTMLProps<HTMLAnchorElement>) => (
        <>
            <a
                className="group prose-base font-normal text-[#f46b67] no-underline hover:text-[#e74242]"
                target="_blank"
                {...props}
            >
                {props.children}
                <CgExternal className="text-[#f46b67]  group-hover:text-[#e74242] inline mb-1" />
            </a>
        </>
    ),
    ul: (props: React.HTMLProps<HTMLUListElement>) => <ul className="text-neutral-400" {...props} />,
    li: (props: React.HTMLProps<HTMLLIElement>) => <li className="text-neutral-400 prose-sm" {...props} />,

    pre: ({ children, ...rest }: { children: ReactElement<{ className?: string; children: string }> }) => {
        const child = children.props;
        const language = child.className?.replace("language-", "") || "text";
        const code = child.children.trim?.() || "";

        const handleCopyCode = () => {
            navigator.clipboard.writeText(code);
        };

        return (
            <div className="relative group">
                <button
                    onClick={handleCopyCode}
                    className="absolute top-2 right-2 p-2 bg-transparent border text-neutral-400 hover:text-white active:scale-90 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                    aria-label="Copiar código"
                >
                    <GoCopy className="w-4 h-4" />
                </button>
                <SyntaxHighlighter
                    language={language}
                    style={theme}
                    customStyle={{
                        background: "#0A0A0A",
                        padding: "1rem",
                        fontSize: "0.825rem",
                    }}
                    className="rounded-none bg-background border border-foreground/10 scrollbar scrollbar-content"
                    {...rest}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        );
    },

    code: (props: React.HTMLProps<HTMLElement>) => <code className="font-medium" {...props} />,

    strong: (props: React.ComponentProps<"strong">) => <strong className="text-neutral-200 font-medium" {...props} />,
};

export default components;
