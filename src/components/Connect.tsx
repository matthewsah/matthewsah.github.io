import React, { useEffect } from 'react'

import '../styles/Connect.css'
import '../styles/Animations.css'
import '../styles/App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Connect = (props: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--connect-title');
        if (entry.isIntersecting && !element?.classList.contains('grow')) {
          element?.classList.add('grow');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--connect-title-container') as Element

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const elements: NodeListOf<Element> | null = entry.target.querySelectorAll('.connect-icon');
        elements.forEach((element: Element) => {
          if (entry.isIntersecting && !element?.classList.contains('fade-in')) {
            element?.classList.add('fade-in-bottom');
          }
        })
      });
    });
    const elements: NodeListOf<Element> = document.querySelectorAll('.connect-icon-container');

    elements.forEach((element: Element) => {
      observer.observe(element)
    })
    
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      })
    };
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.connect-resume');
        if (entry.isIntersecting && !element?.classList.contains('fade-in')) {
          element?.classList.add('fade-in-bottom');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.connect-resume-container') as Element

    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [])


  return (
    <div className='portfolio--connect page' id='connect'>
      <div className="portfolio--connect-title-container">
        <h1 className='portfolio--connect-title'>Connect</h1>
      </div>

      <div className="portfolio--connect-items">
        <div className="connect-icon-container">
          <a href="mailto:msah@uci.edu" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className='connect-icon'/>
          </a>
        </div>
        <div className="connect-icon-container">
          <a href="https://linkedin.com/in/matthewsah" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} target='_blank' className='connect-icon'/>
          </a>
        </div>
        <div className="connect-icon-container">
          <a href="https://github.com/matthewsah" target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='connect-icon'/>
          </a>
        </div>
        <div className="connect-icon-container">
          <a href="https://www.instagram.com/matt.sah/?hl=en" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} className='connect-icon'/>
          </a>
        </div>
      </div>


      <div className="connect-resume-container">
        <a href="./resources/Matthew_Sah_resume.pdf" target="_blank" className="connect-resume">
          <div className="connect-resume-inner">
            <FontAwesomeIcon icon={faFile} className='connect-icon-resume'/>
            <span className='connect-resume-text'>Resume</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Connect