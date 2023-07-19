import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import diq from '../assets/diq.png'
import imaua from '../assets/imaua.png'
import maualib from '../assets/maualib.png'
import nutriapp from '../assets/nutriapp.png'
import portal from '../assets/portal.png'
import portfolio from '../assets/portfolio.png'

interface Project {
  title: string
  titleInEnglish: string
  text: string
  textInEnglish: string
  techs: string[]
  image: StaticImport
  link: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio',
    titleInEnglish: 'Portfolio',
    text: 'Meu portfolio pessoal, que reúne todos os meus projetos e informações importantes sobre mim.',
    textInEnglish:
      'My personal portfolio, which gathers all my projects and important information about me.',
    techs: ['Next.js', 'TailwindCSS', 'TypeScript', 'Vercel'],
    image: portfolio,
    link: 'https://github.com/enzosakamoto/nextjs-portfolio'
  },
  {
    title: 'Site | DIQ-CP',
    titleInEnglish: 'Website | DIQ-CP',
    text: 'Site com parceiros da Divisão de Inovação e Qualidade do Centro de Pesquisa do Instituto Mauá de Tecnologia.',
    textInEnglish:
      'Website with partners from the Innovation and Quality Division of the Mauá Institute of Technology Research Center.',
    techs: ['Next.js', 'CSS Modules', 'TypeScript', 'Vercel'],
    image: diq,
    link: 'https://github.com/enzosakamoto/diq-cp'
  },
  {
    title: 'iMauá',
    titleInEnglish: 'iMauá',
    text: 'Projeto semestral para o fechamento do 1º semestre da 3ª série do curso de Engenharia de Computação do Instituto Mauá de Tecnologia da disciplina Linguagens de Programação I.',
    textInEnglish:
      'Semestral project for the closing of the 1st semester of the 3rd year of the Computer Engineering course at the Mauá Institute of Technology of the Programming Languages I discipline.',
    techs: ['Java', 'MySQL'],
    image: imaua,
    link: 'https://github.com/enzosakamoto/imaua'
  },
  {
    title: 'NutriApp',
    titleInEnglish: 'NutriApp',
    text: 'Aplicativo que armazena diversos dados sobre alimentos (tabelas nutricionais) e converte valores nutricionais em função da massa digitada.',
    textInEnglish:
      'Application that stores various data about food (nutrition tables) and converts nutritional values ​​as a function of the typed mass.',
    techs: ['Flutter', 'Dart'],
    image: nutriapp,
    link: 'https://github.com/enzosakamoto/nutri-app'
  },
  {
    title: 'Portal Interno | Dev. Community Mauá',
    titleInEnglish: 'Internal Portal | Dev. Community Mauá',
    text: 'Portal interno para os membros da entidade Dev. Community Mauá, para controle de horas e registro de atividades e projetos.',
    textInEnglish:
      'Internal portal for members of the Dev. Community Mauá entity, for time control and registration of activities and projects.',
    techs: ['Next.js', 'CSS Modules', 'TypeScript'],
    image: portal,
    link: 'https://github.com/Maua-Dev/portal_interno_front'
  },
  {
    title: 'MauáLib | Dev. Community Mauá',
    titleInEnglish: 'MauáLib | Dev. Community Mauá',
    text: 'Projeto realizado por membros da entidade Dev. Community Maua, que visa criar uma extensão do site do Instituto Mauá de Tecnologia voltado à Biblioteca da Instituição.',
    textInEnglish:
      'Project carried out by members of the Dev. Community Maua entity, which aims to create an extension of the website of the Mauá Institute of Technology focused on the Institution Library.',
    techs: ['Flutter', 'Dart'],
    image: maualib,
    link: 'https://github.com/enzosakamoto/MauaLib'
  }
]
