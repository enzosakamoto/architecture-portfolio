'use client'
import Navbar from '../components/navbar/Navbar'
import ProjectComponent from '../components/project_component/ProjectComponent'
import useLanguage from '../utils/language'
import { projects } from './projects'

export default function Projects() {
  const { english } = useLanguage()
  return (
    <main className="flex flex-col bg-gradient-to-b from-white via-blue-100 to-blue-200">
      <Navbar english={english} />
      <section className="grid h-auto grid-cols-1 content-center items-center justify-center gap-10 px-10 py-52 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectComponent
            key={index}
            title={english ? project.titleInEnglish : project.title}
            text={english ? project.textInEnglish : project.text}
            techs={project.techs}
            image={project.image}
            link={project.link}
          />
        ))}
      </section>
    </main>
  )
}
