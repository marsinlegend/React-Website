import React from "react";
import web from "../src/images/homepage2.png";
import {NavLink} from "react-router-dom";
import Common from "./common";


const About = () => {
  return (
    <>
      <Common 
      name="Welcome to About page" 
      imgsrc={web} 
      visit="/contact" 
      btname="Contact Now" />
    </>
  );
};

export default About;
