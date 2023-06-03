import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/projects/ProjectSection";

export default function Home() {
  return (
    <main className="mt-48 container mx-auto text-white">
      <div className="mb-24 grid grid-cols-2">
        <div>
          <h1 className="text-4xl mb-4">Anthony Matignon</h1>
          <h2 className="text-3xl">Développeur Symfony / Vue</h2>
          <div className="flex flex-col gap-2 mt-32">
            <div>
              <a
                href="https://www.linkedin.com/in/anthonymatignon/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a href="https://github.com/Dakhtara" target="_blank">
                Github
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/pwittie" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between text-[#DEDEDE]">
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
            en faisant une formation à l'école des Gobelins à Paris.
          </p>
          <p>
            Je suis toujours a la recherche de nouvelles expériences, que ce
            soit en Freelance ou en CDI.
          </p>
        </div>
      </div>
      <ExperienceSection />
      <ProjectSection />
      <footer className="container mx-auto my-24 text-[#dedede] text-center text-sm">
        Site réalisé sous Next.js, TailwindCSS. Déployé sur Vercel.
      </footer>
    </main>
  );
}
