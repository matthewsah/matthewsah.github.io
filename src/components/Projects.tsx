import React, { useEffect } from 'react'

import '../styles/App.css'
import '../styles/Projects.css'
import '../styles/Animations.css'
import ProjectCard from './ProjectCard'

type Props = {}

type IProject = {
  title: string,
  type: string,
  date: string,
  tools: string[],
  description: string,
  image: string,
  altText: string
  link?: string
}

const projects: IProject[] = [
  {
    title: 'My Tennis Journal',
    type: 'Personal Project',
    date: 'August 2022 - August 2023',
    tools: ['JavaScript', 'TypeScript', 'Node', 'Express', 'MongoDB', 'React', 'Heroku', 'Netlify'],
    description: 'Designed, developed and deployed a full-stack web application ' +
                'for personal use and to sharpen skills in web development. The ' +
                'application enables users to create an account, sign in, and ' +
                'create practice logs where they can set goals and evaluate ' +
                'their progress over time.',
    image: './resources/tennis-court.jpg',
    altText: 'My Tennis Journal',
    link: 'https://github.com/matthewsah/my-tennis-journal'
  },

  {
    title: 'Mailbag',
    type: 'SWE250P - Web Programming',
    date: 'November 2023 - December 2023',
    tools: ['TypeScript', 'Node', 'Express', 'MongoDB', 'React'],
    description: 'Developed a simple full-stack email client allowing users ' +
              'to view their different mailboxes, view messages, create and ' +
              'access favorite contacts, and send emails.',
    image: './resources/mailbag.jpg',
    altText: 'Mailbag',
    link: 'https://github.com/matthewsah/mailbag'
  },

  {
    title: 'Tweeter',
    type: 'Personal Project',
    date: 'October 2023 - November 2023',
    tools: ['Go', 'PostreSQL', 'chi-router'],
    description: 'Developed a backend system for a simple Twitter clone ' +
              'implementing the core functionality of the application. ' +
              'Users can create accounts, follow and unfollow other users, ' +
              'post tweets, and view their feed.',
    image: './resources/tweeter.jpg',
    altText: 'Tweeter',
    link: 'https://github.com/matthewsah/twitter_backend_clone'
  },

  {
    title: 'Student System Manager',
    type: 'L3Harris Technologies',
    date: 'June 2022 - August 2022',
    tools: ['TypeScript', 'Node', 'Express', 'MongoDB', 'React', 'Docker', 'Jest'],
    description: 'Developed a Student System Manager for a training suite enabling ' +
              'the instructor to manage and monitor up to 2 student systems ' +
              'and put them through training simulations in real time. ' +
              'Leveraged TypeScript, Node, Express, and MongoDB to create the ' +
              'backend and React to create the frontend. ' +
              'Thoroughly tested all components using Jest and achieved over 90%' +
              ' code coverage for each component.',
    image: './resources/l3harris_technologies_logo.jpg',
    altText: 'Student System Manager'
  },

  {
    title: 'Food For You',
    type: 'CS125 - Next Generation Search Systems',
    date: 'January 2023 - March 2023',
    tools: ['Python', 'NLTK'],
    description: 'For our CS125 - Next Generation Search Systems course, my team and I created ' +
              'a basic Android application that recommends dishes for the user to make based ' +
              'off of their available ingredients, cuisine preferences, and the time of day. ' +
              'I processed a database of over 50,000 recipes using NLTK, categorized each ' +
              'recipe by meal, added predicted cuisine types by utilizing open source ' +
              'machine learning models, and created an index to efficiently access the data ' +
              'and make recommendations to the user.',
    image: './resources/food-for-you.png',
    altText: 'Food For You',
    link: 'https://github.com/JasonTran2020/FoodForYou'
  },

  {
    title: 'Notes',
    type: 'Personal Project',
    date: 'September 2023 - October 2023',
    tools: ['Python', 'Flask', 'SQLite'],
    description: 'Created a simple Notes application to learn the Flask framework. ' +
                'Leveraged Flask to create the backend that communicates with the ' +
                'SQLite database and performs secure user authentication.',
    image: './resources/notes.png',
    altText: 'Notes',
    link: 'https://github.com/matthewsah/flask-tutorial'
  },
  
  {
    title: 'Search Engine',
    type: 'CS121 - Information Retrieval',
    date: 'September 2023 - October 2023',
    tools: ['Python', 'NLTK', 'BeautifulSoup'],
    description: 'Built a Web Search Engine utilizing tf-idf scoring from scratch, ' +
              'capable of handling 50,000+ web pages under harsh operational constraints, ' +
              'with a query response time under 300ms. Utilized BeautifulSoup and nltk ' +
              'to scrape, clean and process data from 50,000+ web pages to create the index.',
    image: './resources/search-engine.png',
    altText: 'Search Engine'
  },
]

const Projects = (props: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element: Element | null = entry.target.querySelector('.portfolio--projects-title');
        if (entry.isIntersecting && !element?.classList.contains('grow')) {
          element?.classList.add('grow');
          return;
        }
      });
    });
    const element: Element = document.querySelector('.portfolio--projects-title-container') as Element

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [])

  // add fade in for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const elements: NodeListOf<Element> | null = entry.target.querySelectorAll('.project-card');
        elements?.forEach((element) => {
          if (entry.isIntersecting && !element?.classList.contains('fade-in')) {
            element?.classList.add('fade-in-bottom');
          }
        })
      });
    });
    const elements: NodeListOf<Element> = document.querySelectorAll('.project-card-wrapper')
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
    <div className='portfolio--projects page' id='projects'>
      <div className="portfolio--projects-title-container">
        <h1 className='portfolio--projects-title'>Projects</h1>
      </div>
      <div className="portfolio--projects-content">
        {projects.map((project: IProject) => {
          return <div className="project-card-wrapper" key={project.title}>
            < ProjectCard
              title={project.title} 
              type={project.type}
              date={project.date}
              tools={project.tools}
              description={project.description}
              image={project.image}
              altText={project.altText}
              link={project.link}
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects