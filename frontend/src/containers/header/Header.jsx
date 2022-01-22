import React from 'react';
import './header.css'
import slicelogo from '../../assets/LOGOS-08.png'

const Header = () => {
  return  (
    <div className="slice__header section__padding" id="home">
      <div className="slice__header_header-logo">
          <img src={slicelogo} alt="slice logo"/>
        <h1> Slice.</h1>
        </div>
       
      </div>
    
  )
  
}

export default Header;
