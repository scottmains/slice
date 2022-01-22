import React, { useEffect, useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import classNames from "classnames";
import { NavLink} from "react-router-dom";



const Menu = () => (
  <>
  <p><NavLink to ="/"> Home </NavLink></p>
  <p><NavLink to ="/menu"> Our Menu</NavLink></p>
  <p><NavLink to ="/our-story"> Our Story </NavLink></p>
  <p><a href="https://www.ubereats.com/gb/store/slice-boro/7uGrAMUDWNqrF_2t-x90yw?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"> Order Now </a></p>

 
  </>
)

const Navbar= () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return  (

    <div className={classNames(
      "slice__navbar",
      { " slice__navbar-shrunk  ": isShrunk }
    )}
  >
    
       <div className="slice__navbar-menu">
      {toggleMenu 
        ? <RiCloseLine color="#ff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line className="menu-icon " size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="slice__navbar-menu_container swing-in-top-fwd "> 
          <div className="slice__navbar-menu_container-links">
          <Menu /> 
          </div>
      <div className ="slice__navbar-menu_container-links-icons">
        <div className = "slice__navbar-menu_container-icons">
         
        <div className="slice__navbar-facebookicon" >
         <FontAwesomeIcon icon={faFacebook}/> 
         </div>
      
        <div className="slice__navbar-instagramicon" >
        <a href="https://www.instagram.com/slice.boro/"> <FontAwesomeIcon icon={faInstagram} /> </a>
        </div>
        </div>
        </div>
      </div>
      )}
    </div>
      
      <div className ="slice__navbar-icons">
        <div className="slice__navbar-facebookicon" >
        <a href="https://www.facebook.com/slice.boro/">
      <FontAwesomeIcon icon={faFacebook} /> </a> 
        </div>
        
        <div className="slice__navbar-instagramicon" >
        <a href="https://www.instagram.com/slice.boro/">
      <FontAwesomeIcon icon={faInstagram} /> </a>
        </div>
      </div>



      
            
    </div>



  )
  
 
}

export default Navbar;
