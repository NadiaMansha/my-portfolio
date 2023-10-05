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

        <h1>I'M NADIA MANSHA</h1>
        <br />
        <h2>WEB/APP DEVELOPER</h2>
        <p>From Concept to Code: Shaping the Future of the Digital Realm.</p>
        <button>LET'S TALK</button>
        <div className="home_social">
          <p>Follow me</p>
          <div className="home_social__icons">
            <BiLogoFacebookCircle className="home_social__icons__icon" />
            <BiLogoInstagramAlt className="home_social__icons__icon" />
            <BiLogoLinkedin className="home_social__icons__icon" />
            <BiLogoGithub className="home_social__icons__icon" />
            <BiLogoTwitter className="home_social__icons__icon" />
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
