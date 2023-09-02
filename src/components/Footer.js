import "./FooterStyles.css";
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneInTalk from "@mui/icons-material/PhoneInTalk";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <LocationOnIcon size={20} style={{color:
              '#fff', marginRight:"2rem"}} />
            <div><p>Ameerpet , Hyderabad</p></div>
          </div>
          <div>
            <PhoneInTalk size={20} style={{color:
              '#fff', marginRight:"2rem"}} />
            <div><p>+91 9798347787</p></div>
          </div>
          <div>
            <MarkEmailReadIcon size={20} style={{color:
              '#fff', marginRight:"2rem"}} />
            <div><p>ankitkashyav80@gmail.com</p></div>
          </div>
        </div>
        
        <div className="right">
          <h2 style={{color:"white"}}>About the Portfolio</h2>
          <p>This is Mr. Ankit Portfolio's that can be define as a colletion of Project and some information data that are help by anindivisual</p>
          <div className="social">
            <FacebookIcon href="" size={20} style={{color:"#fff",marginRight:"1.2rem",cursor:"pointer"}}/>          
            <TwitterIcon  size={20} style={{color:"#fff",marginRight:"1.2rem",cursor:"pointer"}}/>
            <LinkedInIcon size={20} style={{color:"#fff",marginRight:"1.2rem",cursor:"pointer"}}/>
            <InstagramIcon size={20} style={{color:"#fff",marginRight:"1.2rem",cursor:"pointer"}}/>
            <GitHubIcon size={20} style={{color:"#fff",marginRight:"1.2rem",cursor:"pointer"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
