import React from 'react';
import './storycontent.css'
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import VenueImage1 from '../../assets/venue-image1.jpg'
import VenueImage2 from '../../assets/venue-image2.jpg'

const StoryContent = () => {
  return  (
    
  <div className="slice__story-content section__padding ">
      <div className="slice__story-top">
      <LightSpeed>
        <div className="slice__story-image1">
        <img src={VenueImage1} alt="slice venue"></img>
        </div>
       
        
    <div className="slice__story-text"> 
      <h1> Our Story </h1>
      <p> We're a fresh pizza gaff started from a passion of home-made pizzamaking.
          Since lockdown started, we got our first pizza oven and ever since then we've 
          been addicted to making the best pizzas you'll ever taste. Don't believe us? come to 
          our newly furbished venue on bakers street and try it for yourself!
      </p>
    </div>
   
   
    <div className="slice__story-image2">
    <img src={VenueImage2} alt="slice venue"></img>   
    </div>
    </LightSpeed>
</div>
</div>

    
    

 

  )
  
 
}

export default StoryContent;
