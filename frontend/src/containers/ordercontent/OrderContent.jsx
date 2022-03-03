import React from 'react';
import './ordercontent.css'
import Fade from 'react-reveal/Fade';
import {SiUbereats} from 'react-icons/si';
import Snapps from '../../assets/snappslogo.png';


const OrderContent = () => {
  
  return  (
    

  <div className="slice__order section__padding ">
    <Fade>
    <div className="slice__order-text"> 
      <h1> Want to enjoy it at home? </h1>
      <p> We're now on Uber Eats and Snapps! </p>
      <div className = "slice__order-icons">
      <div className="slice__order-ubericon">
      <a href="https://www.ubereats.com/gb/store/slice-boro/7uGrAMUDWNqrF_2t-x90yw?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"> <SiUbereats /></a>
      </div> 
      <div className="slice__order-snappsicon">
    <a href = "https://slice-boro.snapps.co.uk/start">  <img src={Snapps} alt="snapps logo" /> </a>
      </div>
    </div>
    </div>
    </Fade>
    </div>
  
  )
}

export default OrderContent;
