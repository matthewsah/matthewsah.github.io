import React, {useEffect} from 'react'

import '../styles/Home.css'
import '../styles/Animations.css'
import '../styles/App.css'

type Props = {}

const Home = (props: Props) => {
  // bounce in from left animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const bounceLeft = entry.target.querySelector('.portfolio--home-left');
        if (entry.isIntersecting && !element?.classList.contains('bounce-in-left')) {
          bounceLeft?.classList.add('bounce-in-left');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--home') as Element
  
    observer.observe(element);
  }, [])

  // bounce in from right animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const bounceRight = entry.target.querySelector('.portfolio--home-right');
        if (entry.isIntersecting && !element?.classList.contains('bounce-in-right')) {
          bounceRight?.classList.add('bounce-in-right');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--home') as Element
  
    observer.observe(element);
  }, [])

  return (
    <div className='portfolio--home page' id='home'>
      <div className="portfolio--home-left">
        <h1 className='portfolio--home-title'>Matthew Sah</h1>
      </div>
      <div className="portfolio--home-right">
        <img src="resources/matthew_headshot.jpg" alt="matthew-headshot" className="portfolio--home-image "></img>
      </div>
    </div>
  )
}

export default Home