import React from 'react';
import './footer.css';
import slicelogo from '../../assets/nav-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import { FaPhone } from 'react-icons/fa'; 
import { FaMailBulk} from 'react-icons/fa'; 

const Footer = () => {
  return  (
    <div>
      <div className="slice__footer section__padding">
        <div className="slice__footer-links">
          <div className="slice__footer-links_logo">
            <img src={slicelogo} alt ="slice-logo"/>
          </div>
         <div className="slice__footer-links_div">
       <h4><FaPhone /> 07780 600224 </h4> 
            <h4><FaMailBulk /> slice.boro@gmail.com </h4>
            <h4> 25 Bedford St, Middlesbrough TS1 2LL </h4>
         </div>
         <div className="slice__footer-links_div">
            <h3> OPENING TIMES </h3>
            <h4> THURSDAY - SATURDAY: 5-10PM </h4>
            <h4> SUNDAY: 5-9:30PM</h4>
         </div>
         <div className="slice__footer-links_div">
            <h3> Come look at our food: </h3>
            <div className="slice__footer-links_social">
            <div className="slice__footer-facebookicon" >
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="slice__footer-instagramicon" >
          <FontAwesomeIcon icon={faInstagram} />
        </div>
          </div>
         </div>
        </div>
      </div>
    </div>

  )
  
 
}

export default Footer;
