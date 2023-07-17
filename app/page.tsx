"use client";
import ExperienceSection from "@/components/ExperienceSection";
import ExternalLink from "@/components/macro/ExternalLink";
import ProjectSection from "@/components/projects/ProjectSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="mt-8 md:mt-48 container mx-auto text-white">
      <div className="mb-12 md:mb-24 grid md:grid-cols-2">
        <motion.div transition={{delay: 0, duration: .4}} initial={{opacity: 0, transform: "translateX(-20px)"}} animate={{opacity: 1, transform: "translateX(0)"}}>
          <h1 className="text-4xl text-center md:text-left mb-4">Anthony Matignon</h1>
          <h2 className="text-3xl text-center md:text-left">Développeur Symfony / Vue</h2>
          <div className="mx-8 md:mx-0 grid grid-cols-3 md:flex md:flex-col gap-2 mt-8 md:mt-32">
            <div>
              <ExternalLink href="https://www.linkedin.com/in/anthonymatignon/"
                target="_blank">LinkedIn</ExternalLink>
            </div>
            <div>
              <ExternalLink href="https://github.com/Dakhtara" target="_blank">
                Github
              </ExternalLink>
            </div>
            <div>
              <ExternalLink href="https://www.instagram.com/pwittie" target="_blank">
                Instagram
              </ExternalLink>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-4 mt-12 md:mt-0 justify-between text-[#DEDEDE]">
          <p>
            Depuis 8 ans, je conçois et développe des sites internet, des
            applications, des APIs. Passionné depuis très jeunes par les
            technologies web, j’ai appris les fondamentaux des langage de
            programmation.
          </p>
          <p>
            Avec les années je me suis spécialisé sur Symfony et Vue.js, je
            reste toujours très curieux par les nouveautés que ce soit côté
            front ou back.
          </p>
          <p>
            J’ai récemment commencé le développement 3D WebGL avec Three.js et
            aussi beaucoup étudié le design d’expérience utilisateur (UX)
            en faisant une formation à l&apos;école des Gobelins à Paris.
          </p>
          <p>
            Je suis toujours a la recherche de nouvelles expériences, que ce
            soit en Freelance ou en CDI.
          </p>
        </div>
      </div>
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
