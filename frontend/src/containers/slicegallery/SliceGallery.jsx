import React from 'react';
import { Slider } from '../../components';
import './slicegallery.css'
import Fade from 'react-reveal/Fade';
import {FaPizzaSlice} from  'react-icons/fa';


const SliceGallery = () => {


  
  return  (
    

  <div className="slice__gallery section__padding">
 <Fade>
    <div className="slice__gallery-header"> 
      <h1> Fancy a slice?</h1>
      </div>
        <Slider />
      <a href="/menu">  <h2> OUR MENU </h2> </a>
        <FaPizzaSlice className="slice__gallery-pizzaicon"/>
    </Fade>
  </div>
  
  )
  
 
}

export default SliceGallery;
