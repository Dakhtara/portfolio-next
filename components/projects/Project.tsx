"use client";

import LabelTechno from "../macro/LabelTechno";
import {motion} from "framer-motion";

export type ProjectProps = {
  name: string;
  children?: React.ReactNode;
  technos?: string[];
};

export default function Project(props: ProjectProps) {
  const variants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    show: { opacity: 1, transform: "translateY(0)" }
  }
  return (
    <motion.div layout  transition={{duration: .2}} variants={variants}>
    <div className="flex flex-col gap-2 cursor-pointer hover:bg-sky-900/50 rounded-lg px-4 py-2 transition-all">
      <h1 className="text-xl">{props.name}</h1>
      {props.children && <div className="text-[#CECECE]">{props.children}</div>}
      <div className="flex gap-2">
        {props.technos?.map((techno, index) => (
          <LabelTechno key={index+props.name} techno={techno} />
        ))}
        </div>
    </div>
    </motion.div>
  );
}
