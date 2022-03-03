import React from 'react';
import { Slider } from '../../components';
import './gallerycontent.css'
import Fade from 'react-reveal/Fade';
import {BsArrowRight} from 'react-icons/bs';
import { NavLink} from "react-router-dom";


const GalleryContent = () => {

  return  (
    

  <div className="slice__gallery section__padding">
 <Fade>
    <div className="slice__gallery-header"> 
      <h1> Fancy a slice?</h1>
      </div>
        <Slider />
        <NavLink to ="/menu"> 
        <h2> OUR MENU </h2>
        <BsArrowRight className="slice__home-text_story-arrow"/>
        </NavLink> 
    </Fade>
  </div>
  
  )
  
 
}

export default GalleryContent;
