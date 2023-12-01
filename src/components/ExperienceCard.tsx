import React, {useEffect} from 'react'

import '../styles/ExperienceCard.css'

type Props = {
  companyLogo: string,
  companyName: string,
  dates: string,
  location: string,
  experience: IExperienceDescription,
}

interface IExperienceDescription {
  intro: string,
  description: string 
}

const ExperienceCard = (props: Props) => {
  const {companyLogo, companyName, dates, location, experience} = props

  return (
    <div className="experience-card">
      <div className="experience-card-left">
        <div className="experience-card-left-inner">
          <div className="experience-card-left-header">
            <h2>{companyName}</h2>
            <h4>{dates}</h4>
            <h4>{location}</h4>
          </div>
          <div className="experience-card-left-content">
            <p>
              {experience.intro}
            </p>
            <br />
            <p>  
              {experience.description}
            </p>
          </div>
        </div>
      </div>
      <div className="experience-card-right">
        <img src={companyLogo} alt="L3Harris Technologies logo" />
      </div>
    </div>
  )
}

export default ExperienceCard