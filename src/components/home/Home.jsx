import React from "react";
import "./Home.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { Services } from "../services/Services";
import { Works } from "../works/Works";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
export const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div
          style={{ height: "4px", width: "100px", backgroundColor: "#3d3a3a" }}
        ></div>
       <div id="about">
       <h1>I'M NADIA MANSHA</h1>
        <br />
        <h2>WEB/APP DEVELOPER</h2>
        <p>From Concept to Code: Shaping the Future of the Digital Realm.</p>
       </div>
       
        <button>
        <a href="mailto:nadia.mansha.dev@gmail.com">
          LET'S TALK
          </a>
          </button>
        <div className="home_social">
          <p>Follow me</p>
          <div className="home_social__icons">
          <a href="https://www.facebook.com/profile.php?id=100019569817354" target="_blank">
            <BiLogoFacebookCircle className="home_social__icons__icon" />
            </a>
          
            <a href="https://www.instagram.com/nadia_mansha2481/" target="_blank">
            <BiLogoInstagramAlt className="home_social__icons__icon" />
            </a>
          
            <a href="https://www.linkedin.com/mwlite/profile/me?trk=p_mwlite_feed_updates-secondary_nav" target="_blank">
            <BiLogoLinkedin className="home_social__icons__icon" />
            </a>
        

            <a href="https://github.com/NadiaMansha" target="_blank">
            <BiLogoGithub className="home_social__icons__icon" />
            </a>
          </div>
        </div>
      </div>

      <Services />

      {  <Works /> }
      <Contact />
      <hr />
      <Footer />
    </div>
  );
};
