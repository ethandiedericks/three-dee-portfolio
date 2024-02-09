/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const About = loadable(() => import("./components/About"));
const Contact = loadable(() => import("./components/Contact"));
const Experience = loadable(() => import("./components/Experience"));
const Hero = loadable(() => import("./components/Hero"));
const Navbar = loadable(() => import("./components/Navbar"));
const Tech = loadable(() => import("./components/Tech"));
const Projects = loadable(() => import("./components/Projects"));
const StarsCanvas = loadable(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
