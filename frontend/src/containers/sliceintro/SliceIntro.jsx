import React from 'react';
import './sliceintro.css'
import Fade from 'react-reveal/Fade';
import {BsArrowRight} from 'react-icons/bs';
import { NavLink} from "react-router-dom";




const SliceIntro = () => {
  return  (
    
    
  <div className="slice__home section__padding ">
    <Fade>
    <div className="slice__home-text"> 
      <h1> Detroit and Neapolitan style pizza in the heart of the northeast.</h1>
      <p> Slice is a newly established pizza restaurant located on Middlesbrough's
        vibrant and independent hotspot - Bedford street! We've recently opened up a brand
        new restaurant in Norton - come give us a visit on Leven Street. </p>
        <div className="slice__home-text_story">
        <NavLink to ="/our-story"> 
        <h2> Read our story </h2> 
        <BsArrowRight className="slice__home-text_story-arrow"/>
        </NavLink> </div>
    </div>
    </Fade>
    </div>
  )
}

export default SliceIntro;
