import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from 'react';
import sc from "../images/screen.jpg";
import sc2 from "../images/screen.jpg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I'm React fronted Developer</p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src={sc} className="img" alt="true"/>
                </div>
                <div className="img-stack top">
                    <img src={sc2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default AboutContent;

