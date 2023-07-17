"use client";

import Experience from "./Experience";
import { motion } from "framer-motion";

export default function ExperienceSection() {
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
    <div className="my-16 md:my-32 max-w-2xl mx-auto">
      <h1 className="text-2xl">Experiences</h1>
      <div>
        <motion.div className="my-8 md:mt-8 flex flex-col gap-4" variants={container} viewport={{amount: .5, once: true}} initial="hidden" whileInView="show">

        <Experience
          from="2021"
          to="2023"
          company="Farmitoo"
          job="Développeur Fullstack Symfony JS"
          link="https://farmitoo.com"
          technos={['Symfony', 'Svelte', 'MySQL']}
        >
          <p>
            Développement du site internet, gestion de synchro des stocks et
            produits.
            <br />
            Développement de l’interface e-commerce et évolution des produits
          </p>
        </Experience>
        <Experience
          from="2018"
          to="2021"
          company="Codes Roussseau"
          job="Développeur FullStack"
          link="https://auto-ecole.codesrousseau.fr"
          technos={['Symfony', 'VueJS', 'MariaDB']}
        >
          <p>
            Développement de l’application web de Codes Rousseau<br />
            Migration vers Symfony du projet legacy<br/>
            Ajout de features et création d’une API pour une application tablette.
          </p>
        </Experience>
        <Experience
        from="2017"
        to="2018"
        company="Digital Garden"
        job="Développeur FullStack Symfony"
        link="https://www.digitalgarden.fr"
        technos={['Symfony', 'VueJS', 'MySQL']}
        >
            <p>
                Agence web de création de sites internet.<br/>
                Site instit, e-commerce, intranet, etc.
            </p>
        </Experience>
        <Experience
            from="2016"
            to="2017"
            company="37Deux"
            job="Développeur Symfony"
            link="https://37deux.com"
            technos={['Symfony', 'ElasticSearch', 'VueJS']}
            >
            <p>
                Création de sites internet pour divers client sous Symfony.<br/>
                Gestion de produits, de commandes, de stock, etc.
            </p>
        </Experience>
        </motion.div>

      </div>
      
    </div>
  );
}
