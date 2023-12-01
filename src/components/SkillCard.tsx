import React from 'react'

import '../styles/SkillCard.css'

type CardProps = {
  logo: string,
  title: string,
}

const SkillCard = (props: CardProps) => {
  const {logo, title} = props;

  return (
    <div className="skill-card">
      <img src={logo} className='skill-card-logo' />
      <h2>{title}</h2>
    </div>
  )
}

export default SkillCard