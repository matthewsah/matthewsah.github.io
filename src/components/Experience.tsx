import React, {useEffect} from 'react'

import '../styles/Experience.css'
import '../styles/Animations.css'
import '../styles/App.css'
import ExperienceCard from './ExperienceCard'

type Props = {}

interface IExperienceDescription {
  intro: string,
  description: string 
}

const experienceDescriptions: IExperienceDescription[] = [
  {
    intro: 'In the summer of 2022 I worked for L3Harris Technologies as a ' +
     'Software Engineer Intern in the Space and Airborne Systems department. ',
    description: 'My summer assignment was to create a full-stack component ' + 
    'for a training suite enabling an instructor to put up to 2 student ' + 
    'systems through a real-time training simulation. Though I had little to '+ 
    'no prior experience with the tools required for my project '+ 
    '(JavaScript, TypeScript, Node, Express, MongoDB, React, Docker), I was ' + 
    'able to learn them along the way, and succeed and excel in my internship.'
  }
]

const Experience = (props: Props) => {
// grow animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--experience-title');
        if (entry.isIntersecting && !element?.classList.contains('grow')) {
          element?.classList.add('grow');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--experience-title-container') as Element

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.experience-card');
        if (entry.isIntersecting && !element?.classList.contains('fade-in')) {
          element?.classList.add('fade-in-bottom');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--experience-content') as Element

    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [])

  return (
    <div className='portfolio--experience page' id='experience'>
      <div className="portfolio--experience-title-container">
        <h1 className='portfolio--experience-title'>Experience</h1>
      </div>
      <div className='portfolio--experience-content'>
        {/* change to for each loop as more experience is added */}
        <ExperienceCard companyLogo='./resources/l3harris_logo.png' 
        companyName='L3Harris Technologies' dates='June 2022 - August 2022'
        location='Colorado Springs, CO' experience={experienceDescriptions[0]}/>
      </div>
    </div>
  )
}

export default Experience