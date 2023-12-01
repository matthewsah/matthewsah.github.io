import React, {useEffect} from 'react'

import '../styles/Education.css'
import '../styles/Animations.css'
import '../styles/App.css'

type Props = {}

const courses: string[] = [
  'SWE240P Data Structures',
  'SWE241P Algorithms',
  'SWE243P Database Programming',
  'SWE244P Concurrent Programming',
  'SWE245P GUI Programming',
  'SWE250P Web Programming',
  'CS179 Intro to Graphical Models',
  'CS178 Machine Learning & Data Mining',
  'CS175 Project in AI',
  'CS171 Intro to AI',
  'CS163 Graph Algorithms',
  'CS132 Computer Networks',
  'CS125 Next Gen Search Systems',
  'CS122A Intro to Database Management',
  'CS121 Information Retrieval',
  'CS115 Software Testing & Quality Assurance',
  'CS165 Projects in Data Structures & Algorithms',
  'INF133 User Interaction Software',
  'INF131 Human Computer Interaction',
]

const Education = (props: Props) => {
  
  // grow animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--education-title');
        if (entry.isIntersecting && !element?.classList.contains('grow')) {
          element?.classList.add('grow');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--education-title-container') as Element

    observer.observe(element);
  }, [])

  // grow subtitles
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: NodeListOf<Element> | null = entry.target.querySelectorAll('.portfolio--education-section-header');
        element.forEach((element: Element) => {
          if (entry.isIntersecting && !element?.classList.contains('grow')) {
            element?.classList.add('grow');
          }
        })
      });
    });
    const element: Element = document.querySelector('.portfolio--education-section-header') as Element

    observer.observe(element);
  }, [])
  
  // fade in from left animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--education-section-img-container');
        if (entry.isIntersecting && !element?.classList.contains('fade-in-left')) {
          element?.classList.add('fade-in-left');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--education-section-content') as Element

    observer.observe(element);
  }, [])

  // fade in from right animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--education-section-text-container');
        if (entry.isIntersecting && !element?.classList.contains('fade-in-right')) {
          element?.classList.add('fade-in-right');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--education-section-content') as Element

    observer.observe(element);
  }, [])

  return (
    <div className="portfolio--education page" id='education'>
      <div className="portfolio--education-title-container">
        <h1 className="portfolio--education-title">Education</h1>
      </div>
      <div className="portfolio--education-section college">
        <div className="portfolio--education-section-header">
          <h2 className='portfolio--education-section-title portfolio--education-section-header'>University of California, Irvine</h2>
          <h3 className='portfolio--education-section-subtitle portfolio--education-section-header'>September 2019 - December 2024</h3>
        </div>
        <div className="portfolio--education-section-content">
          <div className="portfolio--education-section-img-container">
            <img src='./resources/uci_logo.png' alt='UCI logo' className='portfolio--education-section-img'/>
          </div>
          <div className="portfolio--education-section-text-container">
            <h3><span className='yellow'>Masters:</span> Software Engineering (Expected December 2024)</h3>
            <h4><span className='yellow'>GPA:</span> 3.94/4.00</h4>
            <br />
            <h3><span className='yellow'>Bachelors:</span> Computer Science - Specialization in Intelligent Systems (Received June 2023)</h3>
            <h4><span className='yellow'>GPA:</span> 3.74/4.00</h4>
            <br />
            <h3><span className='yellow'>Relevant Coursework</span></h3>
            <ul>
              {
                courses.map((course: string) => {
                  const strings: string[] = course.split(' ');
                  const courseNum = strings[0];
                  const courseTitle = strings.slice(1).join(' ')
                  return <li key={courseNum} className='portfolio--education-course'>
                      <span className='yellow'>{courseNum}</span> - {courseTitle}
                    </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="portfolio--education-section highschool"></div>
    </div>
  )
}

export default Education