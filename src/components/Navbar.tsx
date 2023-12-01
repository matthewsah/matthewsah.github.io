import React, {useState} from 'react'
import { Link } from 'react-scroll';

import "../styles/Navbar.css"

type Props = {}

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  function toggleNavbar() {
    setNavbarOpen(!navbarOpen);
    document.querySelector(".portfolio--hamburger")?.classList.toggle("active");
  }

  function toggleMenu() {
    setNavMenuOpen(!navMenuOpen);
    document.querySelector(".portfolio--nav-menu")?.classList.toggle("active");
  }

  function toggleAll() {
    toggleNavbar();
    toggleMenu();
  }

  return (
    <header>
      <nav className="portfolio--navbar">
        <Link to="home" className="portfolio--nav-branding" smooth={true} duration={500}>
          MS
        </Link>

        <ul className="portfolio--nav-menu">
          <li className="portfolio--nav-item">
            <Link to="home" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="portfolio--nav-item">
            <Link to="about" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="portfolio--nav-item">
            <Link to="education" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li className="portfolio--nav-item">
            <Link to="experience" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="portfolio--nav-item">
            <Link to="projects" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="portfolio--nav-item">
            <Link to="skills" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="portfolio--nav-item">
            <Link to="connect" className="portfolio--nav-link" onClick={toggleAll} smooth={true} duration={500}>
              Connect
            </Link>
          </li>
        </ul>

        <div className="portfolio--hamburger" onClick={toggleAll}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar