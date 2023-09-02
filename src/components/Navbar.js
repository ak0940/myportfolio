import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const[click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const [color, setcolor] = useState(false);
  const changecolor = ()=>{
    if(window.scrollY >=1){
      setcolor(true);
    }else{
      setcolor(false);
    }
  };

  window.addEventListener("scroll",changecolor);
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={ click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<CloseIcon size={20} style={{color:"#fff"}}/>) :(<MenuIcon size={20} style={{color:"#fff"}}/>)}
      </div>
    </div>
  );
};

export default Navbar;
