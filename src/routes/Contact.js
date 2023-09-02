import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Contactme from '../components/Contactme';

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Contactme/>
      <Footer/>
    </div>
  )
}

export default Contact;

