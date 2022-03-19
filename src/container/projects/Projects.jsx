import { Heading, Project } from '../../components'

import DesignStudioWebsiteThumbnail from '../../assets/DesignStudioWebsiteThumbnail.png'
import DesignStudioWebsiteImage from '../../assets/DesignStudioWebsiteImage.png'
import DesignStudioWebsitePDF from '../../assets/DesignStudioWebsitePDF.pdf'
import SAASLandingPageThumbnail from '../../assets/SAASLandingPageThumbnail.png'
import SAASLandingPageImage from '../../assets/SAASLandingPageImage.png'
import SAASLandingPagePDF from '../../assets/SAASLandingPagePDF.pdf'
import PortfolioWebsiteThumbnail from '../../assets/PortfolioWebsiteThumbnail.png'
import AiStartupThumbnail from '../../assets/AiStartupThumbnail.png'
import HuluThumbnail from '../../assets/HuluThumbnail.png'

import './Projects.css'

const figmaDesigns = [
  {
    thumbnail: DesignStudioWebsiteThumbnail,
    title: 'Design Studio Landing page',
    image: DesignStudioWebsiteImage,
    download: DesignStudioWebsitePDF,
    id: 1,
  },
  {
    thumbnail: SAASLandingPageThumbnail,
    title: 'SAAS Landing page',
    image: SAASLandingPageImage,
    download: SAASLandingPagePDF,
    id: 2,
  },
]

const designToCode = [
  {
    thumbnail: PortfolioWebsiteThumbnail,
    title: 'Portfolio website',
    description:
      'My first full-fledged, fully-responsive \'Design to Code\' project, which I created from the ground up. This took me about 2 days of design in Figma and a whole week of intense coding to bring this into reality. It was an incredible journey, learning about CSS, JS, and React along the way.',
    tech: ['React', 'CSS', 'Flexbox', 'Javascript', 'HTML'],
    github: 'https://github.com/neerajprabhuram/portfolio-website',
    link: 'https://friendly-morse-b3055e.netlify.app',
    id: 3,
  },
  {
    thumbnail: AiStartupThumbnail,
    title: 'AI Startup website',
    description:
    'This project was my first foray into the realm of React. I followed a tutorial and it turned out to be an excellent project for learning the fundamentals of React. This is a single-page website, and it offered me a great idea of how to turn a design (that wasn\'t mine) into an almost finished website.',
    tech: ['React', 'CSS', 'Flexbox', 'HTML'],
    github: 'https://github.com/neerajprabhuram/gpt3',
    link: 'https://gracious-clarke-2832e1.netlify.app',
    id: 4,
  },
  {
    thumbnail: HuluThumbnail,
    title: 'Hulu clone',
    description:
    'This project is a clone of Hulu, built using the latest techniques of web development like Server-side rendering and utility classes using technologies like Next.js and Tailwind CSS and also leveraging CSS features such as Grid and Flexbox to provide the best User Experience. ',
    tech: ['Next.js', 'Tailwind CSS', 'React', 'TMDB', 'Grid'],
    github: 'https://github.com/neerajprabhuram/hulu-clone',
    link: 'https://hulu-clone-zeta-kohl.vercel.app/',
    id: 5,
  },
]

const Projects = () => {
  return (
    <div className="app__projects" id='projects'>
      <Heading sub="What have I done?" title="Projects" />
      <div className="app__projects-figma_designs">
        <p className="app__projects-headings">Figma Designs</p>
        <div className="app__projects-project_list">
          {figmaDesigns.map(project => {
            return (
              <Project
                type="figmaDesigns"
                title={project.title}
                thumbnail={project.thumbnail}
                image={project.image}
                download = {project.download}
                key={project.id}
              />
            )
          })}
        </div>
      </div>
      <div className="app__projects-figma_to_react">
        <p className="app__projects-headings">Design to Code</p>
        <div className="app__projects-project_list">
          {designToCode.map(project => {
            return (
              <Project
                type="designToCode"
                title={project.title}
                thumbnail={project.thumbnail}
                description={project.description}
                tech={project.tech}
                github={project.github}
                link={project.link}
                key={project.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
