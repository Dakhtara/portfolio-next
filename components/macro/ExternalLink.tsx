import { ReactElement } from "react";

export type ExternalLinkProps = {
    href: string;
    target?: string;
    children: ReactElement|string;
}

export default function ExternalLink(props: ExternalLinkProps) {
    return (
        <a href={props.href} target={props.target ?? "_self"} className="group hover:text-slate-300 transition">
            <span className="after:content-['_'] relative after:absolute after:bottom-0 after:left-0 group-hover:after:w-full after:bg-slate-50 group-hover:after:bg-slate-300
            after:w-0 after:transition-all after:h-[1px]
            ">
                {props.children}
            </span>
        </a>
        );
}
