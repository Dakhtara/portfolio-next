import Link from "next/link";
import { ReactElement } from "react";

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
            <Link href={link}>
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
    <div className="grid grid-cols-[min-content_1fr] gap-8 cursor-pointer hover:bg-sky-900/50 rounded-lg px-4 py-2 transition-all">
      <p className="whitespace-nowrap">
        {from} - {to}
      </p>
      <div className="flex gap-2 flex-col">
        <span className="text-xl">
          {job} - {company}
        </span>
        <div className="text-[#CECECE]">
        {children}
        </div>
      </div>
    </div>
    </WithLink>
    );
}
