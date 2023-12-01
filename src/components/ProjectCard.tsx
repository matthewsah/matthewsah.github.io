import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/ProjectCard.css'

type IProject = {
  title: string,
  type: string
  date: string,
  tools: string[],
  description: string,
  image: string,
  altText: string,
  link?: string
}

const ProjectCard = (props: IProject) => {
  const {title, type, date, tools, description, image, altText, link} = props;

  // make entire card clickable to go to github repo?
  return (
    <div className='project-card'>
      <img className="project-card-image" src={image} alt={altText}/>
      <div className="project-card-info">
        <div className="project-card-text">
          <h2 className="project-card-title">{title} - {type}</h2>
          <h3 className="project-card-tools">{tools.join(', ')}</h3>
          <h3 className="project-card-date">{date}</h3>
          <p className="project-card-description">{description}</p>
        </div>
        <div className="project-icon-container">
          {link !== undefined && <a href={link} target='_blank'>
            <FontAwesomeIcon icon={faSquareGithub} className='fa-icon'/>
          </a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard