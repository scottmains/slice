import React from 'react';
import './slicemenu.css'
import { Navbar} from '../../components'
import { Footer} from '../../containers'
import { useNavigate } from 'react-router-dom';
import MenuContent from '../../containers/menucontent/MenuContent';
import { OrderContent } from '../../containers';



const SliceMenu = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/our-story");
  }


  return  (
    
<div className="slice__menu">
        <div className="gradient__bg"> 
        <Navbar onClick={handleClick}/>
        <MenuContent />
        <OrderContent />
    <Footer />
    </div>
    </div>
  
   
  
  )
  
}

export default SliceMenu;
