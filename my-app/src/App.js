import React from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
