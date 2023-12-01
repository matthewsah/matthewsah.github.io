import React, { useEffect } from 'react'
import SkillCard from './SkillCard'

import '../styles/App.css'
import '../styles/Animations.css'
import '../styles/Skills.css'

type Props = {}

type CardProps = {
  logo: string,
  title: string
}

const languages: CardProps[] = [
  { logo: './resources/python.png', title: 'Python' },
  { logo: './resources/go.png', title: 'Go' },
  { logo: './resources/javascript.png', title: 'JavaScript' },
  { logo: './resources/typescript.png', title: 'TypeScript' },
  { logo: './resources/java.jpeg', title: 'Java' },
  { logo: './resources/cpp.png', title: 'C++' },
]

const frameworks: CardProps[] = [
  { logo: './resources/nodejs.png', title: 'NodeJS' },
  { logo: './resources/chi.png', title: 'Chi Router' },
  { logo: './resources/express.png', title: 'ExpressJS' },
  { logo: './resources/react.svg', title: 'ReactJS' },
  { logo: './resources/flask.png', title: 'Flask' },
]

const databases: CardProps[] = [
  { logo: './resources/mongodb.png', title: 'MongoDB' },
  { logo: './resources/sql.png', title: 'SQL' },
  { logo: './resources/mysql.png', title: 'MySQL' },
  { logo: './resources/postgresql.png', title: 'PostgreSQL' },
  { logo: './resources/sqlite.png', title: 'SQLite' },
]

const tools: CardProps[] = [
  { logo: './resources/git.png', title: 'Git' },
  { logo: './resources/docker.png', title: 'Docker' },
  { logo: './resources/atlassian.png', title: 'Atlassian tools' },
  { logo: './resources/redhat.png', title: 'RedHat Linux' },
]

const Skills = (props: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--skills-title');
        if (entry.isIntersecting && !element?.classList.contains('grow')) {
          element?.classList.add('grow');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--skills-title-container') as Element

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [])

  // add fade in for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const elements: NodeListOf<Element> | null = entry.target.querySelectorAll('.skill-card');
        elements?.forEach((element) => {
          if (entry.isIntersecting && !element?.classList.contains('fade-in')) {
            element?.classList.add('fade-in-bottom');
          }
        })
      });
    });
    const elements: NodeListOf<Element> = document.querySelectorAll('.portfolio--skills-section-content')
    // observe list of elements?
    // observe each element individually
    elements.forEach(element => {
      observer.observe(element);
    });

    // cleanup observer when component unmounts
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [])

  return (
    <div className='portfolio--skills page' id='skills'>
      <div className="portfolio--skills-title-container">
        <h1 className='portfolio--skills-title'>Skills</h1>
      </div>
      <div className="portfolio--skills-content">
        <div className="portfolio--skills-section">
          <div className="portfolio--skills-section-content">
            <h2 className='portfolio--skills-section-title'>Languages</h2>
            {
              languages.map((card: CardProps) => {
                return <SkillCard key={card.title} logo={card.logo} title={card.title}/>
              })
            }
          </div>
        </div>
        <div className="portfolio--skills-section">
          <div className="portfolio--skills-section-content">
            <h2 className='portfolio--skills-section-title'>Frameworks</h2>
            {
              frameworks.map((card: CardProps) => {
                return <SkillCard key={card.title} logo={card.logo} title={card.title}/>
              })
            }
          </div>
        </div>
        <div className="portfolio--skills-section">
          <div className="portfolio--skills-section-content">
            <h2 className='portfolio--skills-section-title'>Databases</h2>
            {
              databases.map((card: CardProps) => {
                return <SkillCard key={card.title} logo={card.logo} title={card.title}/>
              })
            }
          </div>
        </div>
        <div className="portfolio--skills-section">
          <div className="portfolio--skills-section-content">
            <h2 className='portfolio--skills-section-title'>Tools</h2>
            {
              tools.map((card: CardProps) => {
                return <SkillCard key={card.title} logo={card.logo} title={card.title}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills