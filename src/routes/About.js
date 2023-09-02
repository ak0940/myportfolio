import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT" text="Im a friendly Fronted-End Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;
