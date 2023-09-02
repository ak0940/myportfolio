import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from '../images/into.jpg';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img  className="into-img" src={IntroImg} alt="IntoImg"/>
      </div>
      <div className="content">
        <p>HI I'M ANKIT KUMAR</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
