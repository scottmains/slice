import React from 'react';
import { Slider } from '../../components';
import './slicegallery.css'
import Fade from 'react-reveal/Fade';
import {FaPizzaSlice} from  'react-icons/fa';
import { NavLink} from "react-router-dom";


const SliceGallery = () => {


  
  return  (
    

  <div className="slice__gallery section__padding">
 <Fade>
    <div className="slice__gallery-header"> 
      <h1> Fancy a slice?</h1>
      </div>
        <Slider />
        <NavLink to ="/menu"> 
        <h2> OUR MENU </h2>
        <FaPizzaSlice className="slice__gallery-pizzaicon"/>
        </NavLink> 
    </Fade>
  </div>
  
  )
  
 
}

export default SliceGallery;
