import Link from "next/link";
import { ReactElement } from "react";
import ExternalLink from "./icons/ExternalLink";

export type ExperienceProps = {
  company: string;
  job: string;
  children: ReactElement;
  from: string;
  to: string;
  link?: string;
};

function WithLink({link, children}: {link?: string, children: ReactElement}) {
    if (link !== undefined) {
        return (
            <Link href={link} target="_blank">
                {children}
            </Link>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default function Experience({
  job,
  company,
  children,
  from,
  to,
  link
}: ExperienceProps) {
  return (
    <WithLink link={link}>
    <div className="grid grid-cols-[min-content_1fr] gap-8 cursor-pointer group hover:bg-sky-900/50 rounded-lg px-4 py-2 transition-all">
      <p className="whitespace-nowrap">
        {from} - {to}
      </p>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-center group-hover:text-sky-300 transition">
        <span className="text-xl whitespace-nowrap">
          {job} - {company} 
        </span>
        <ExternalLink />
        </div>
        <div className="text-[#CECECE]">
        {children}
        </div>
      </div>
    </div>
    </WithLink>
    );
}
