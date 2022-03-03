import React from 'react';
import './headercontent.css'
import slicelogo from '../../assets/sliceheaderlogo.svg'
import sliceheaderimg from '../../assets/sliceheaderimg.svg'
import {IoIosArrowDropdown} from 'react-icons/io';

const HeaderContent = () => {
  return  (
    <div className="slice__header section__padding" id="home">
      <div className="slice__header_header-logo">
          <img src={slicelogo} alt="slice logo"/>
          </div>
          <div className="slice__location-box">
           <div>
           <div className="slice__header-img">
           <img src={sliceheaderimg} alt="slice logo"/>
           </div>
           <div className="slice__header-buttons">
          <div><a className="slice__collect-button"> Click and Collect</a></div>
          <div><a className="slice__collect-button"> Delivery </a> </div>
          <div><a className="slice__collect-button"> Book Table </a> </div> 
          </div>
     
          </div>
          </div>
      </div>

  )
  
}

export default HeaderContent;
