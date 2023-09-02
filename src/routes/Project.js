import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
//import PricingCart from '../components/PricingCart';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
     
      <Footer/>
    </div>
  )
}

export default Project;
