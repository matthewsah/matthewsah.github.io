import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Connect from './components/Connect';

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
          {/* Use a single route for the root path */}
            <Route path="/" element={<Home />} />
          </Routes>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Connect />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;