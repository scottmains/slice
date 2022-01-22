import React from 'react';
import './sliceintro.css'
import Fade from 'react-reveal/Fade';
import {BsArrowRight} from 'react-icons/bs';

const SliceIntro = () => {
  return  (
    
    
  <div className="slice__home section__padding ">
    <Fade>
    <div className="slice__home-text"> 
      <h1> Detroit and Napoleon style pizza in the heart of the northeast.</h1>
      <p> Slice is a newly established pizza restaurant located on Middlesbrough's
        vibrant and independent hotspot - Baker's street! </p>
        <div className="slice__home-text_story">
     <a href="/our-story"><h2> Read our story </h2> </a> 
       <BsArrowRight className="slice__home-text_story-arrow"/>
       </div>
    </div>
    </Fade>
    </div>
  
  )
  
 
}

export default SliceIntro;
