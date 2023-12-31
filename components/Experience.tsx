"use client";

import Link from "next/link";
import { ReactElement } from "react";
import ExternalLink from "./icons/ExternalLinkIcon";
import LabelTechno from "./macro/LabelTechno";
import { motion } from "framer-motion"

export type ExperienceProps = {
  company: string;
  job: string;
  children: ReactElement;
  from: string;
  to: string;
  link: string;
  technos?: string[];
};

export default function Experience({
  job,
  company,
  children,
  from,
  to,
  link,
  technos,
}: ExperienceProps) {
  const variants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    show: {
      opacity: 1,
      transform: "translate(0)"
    }
  }
  return (
    <motion.div layout layoutId="experience" transition={{duration: .2,}} variants={variants}>
    <Link href={link} target="_blank">
    <div className="grid grid-rows-[min-content_1fr] md:grid-cols-[min-content_1fr] gap-2 md:gap-8 cursor-pointer group hover:bg-sky-900/50 rounded-xl px-4 py-2 transition-all">
      <p className="whitespace-nowrap">
        {from} - {to}
      </p>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-center group-hover:text-sky-300 transition">
        <span className="text-xl">
          {job} - {company} 
        </span>
        <ExternalLink />
        </div>
        <div className="text-[#CECECE]">
        {children}
        </div>
        <div className="flex gap-2">
          {technos?.map((techno, index) => (
            <LabelTechno key={index+techno} techno={techno} />
          ))}
        </div>
      </div>
    </div>
    </Link>
    </motion.div>
    );
}
