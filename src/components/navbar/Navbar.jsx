import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

export const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>Nadia </h1>
      </div>
      <div className="navbar__center">
        <ul className="navbar__center__list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <button>Contact Me</button>
      </div>
      <div className="mobile_navbar">
        {
            showLinks==false?
            <GiHamburgerMenu onClick={()=>setShowLinks(true)} />
            :
            <div className="navbar__links">
                  <AiFillCloseCircle 
                  className="navbar__hamburger__icon_close"
                  onClick={()=>setShowLinks(false)} />
                  <ul >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
        </ul>
            </div>
          

        }
      </div>
      </div>
  );
};
