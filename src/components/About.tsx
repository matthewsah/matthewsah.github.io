import React, {useEffect} from 'react'
import Carousel from './Carousel'

import '../styles/About.css'
import '../styles/Animations.css'
import '../styles/App.css'

type Props = {}


const About = (props: Props) => {
// fade in from left animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--about-carousel-container');
        if (entry.isIntersecting && !element?.classList.contains('fade-in-left')) {
          element?.classList.add('fade-in-left');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.content') as Element

    observer.observe(element);
  }, [])

  // fade in from right animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--about-text');
        if (entry.isIntersecting && !element?.classList.contains('fade-in-right')) {
          element?.classList.add('fade-in-right');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.content') as Element

    observer.observe(element);
  }, [])

  // fade in from right animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--about-title');
        if (entry.isIntersecting && !element?.classList.contains('grow')) {
          element?.classList.add('grow');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--about-title-container') as Element

    observer.observe(element);
  }, [])

  return (
    <div className='portfolio--about page' id='about'>
      {/* slide up from bottom */}
      <div className='portfolio--about-title-container'>
        <h1 className='portfolio--about-title'>About me</h1>
      </div>

      <div className="content">
        <div className="portfolio--about-carousel-container">
          <Carousel />
        </div>
        <div className="portfolio--about-text">
          <p className="portfolio--about-text-top">
            I am a graduate student pursuing a Masters degree in Software Engineering at the University of California, Irvine (UCI).
            Previously, I graduated with a Bachelors of Science in Computer Science (specializing in Intelligent Systems) in June, 2023.
            I particularly enjoy backend development, infrastructure, database management, and full-stack development, and am always eager to learn new things.
          </p>
          <br />
          <p className="portfolio--about-text-bottom">
            Outside of my studies, I have been a member of the varsity, division 1 men's 
            tennis team at UCI since 2019 and have been a captain since 2022. 
            In my free time I love surfing, hiking, travelling, spending time with family, and eating lots of food!
          </p>
        </div>
      </div>

    </div>
  )
}

export default About