"use client";

import Project from "./Project";
import { motion } from "framer-motion";
export default function ProjectSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <div className="my-18 md:my-32 max-w-2xl mx-auto">
      <h1 className="text-2xl">Projets</h1>
        <motion.div className="mt-8 flex flex-col gap-4" layout viewport={{amount: .2, once: true}} variants={container}  initial="hidden" whileInView="show">
        <Project key="afterlife" name="Afterlife" technos={["ThreeJS", "VueJS", "TailwindCSS", "Typescript"]}>
          <p>
            Afterlife est un label de musique electronique.
            <br />
            J’ai souhaité revoir le site avec ma vision et mes compétences.
            <br />
            Des maquettes, aux idées, pour au final crée le site web.
            <br />
            Ce projet contient ThreeJS qui permet de créer des objets et
            animations en 3D.
          </p>
        </Project>
        <Project key="music-player" name="Lecteur de musique" technos={["WebAuthn", "NodeJS","VueJS"]}>
          <p>
            Il s’agit d’un projet personnel créé de zéro.
            <br />
            L’idée était d’avoir mes propres musiques hebergés sur un serveur
            personnel.
            <br />
            Les musiques, au format haute qualité, sont ensuite compressés si
            nécessaire à la volé, une gestion de playlist ainsi que de musique
            favorites.
            <br />
            Gestion de l’identification via l’API WebAuthn qui permet une
            connexion des utilisateurs sans mot de passe.
          </p>
        </Project>
        <Project key="red-cross" name="Croix Rouge Minutis" technos={["Symfony"]}>
          <p>
            Pendant le confinement, j’ai eu l’occasion de travailler sur un
            projet pour la Croix Rouge.
            <br />
            C’est une application web pour assurer le suivi des interventions de
            la Croix Rouge.
          </p>
        </Project>
        </motion.div>
    </div>
  );
}
