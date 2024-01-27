// Import dynamic chunks
const EarthCanvas = () => import(/* webpackChunkName: "earthCanvas" */ './canvas');
const BallCanvas = () => import(/* webpackChunkName: "ballCanvas" */ './canvas');
const ComputersCanvas = () => import(/* webpackChunkName: "computersCanvas" */ './canvas');
const StarsCanvas = () => import(/* webpackChunkName: "starsCanvas" */ './canvas');

const Hero = () => import(/* webpackChunkName: "hero" */ './Hero');
const Navbar = () => import(/* webpackChunkName: "navbar" */ './Navbar');
const About = () => import(/* webpackChunkName: "about" */ './About');
const Tech = () => import(/* webpackChunkName: "tech" */ './Tech');
const Experience = () => import(/* webpackChunkName: "experience" */ './Experience');
const Projects = () => import(/* webpackChunkName: "projects" */ './Projects');
const Feedbacks = () => import(/* webpackChunkName: "feedbacks" */ './Feedbacks');
const Contact = () => import(/* webpackChunkName: "contact" */ './Contact');

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Projects,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
};
