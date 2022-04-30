import React from 'react';
import { Navbar} from '../components'
import { Footer} from '../containers'
import { useNavigate } from 'react-router-dom';
import MenuContent from '../containers/menucontent/MenuContent';
import { OrderContent } from '../containers';



const SliceMenu = () => {
  


  return  (
    
<div className="slice__menu">
        <div className="bg-slate-200"> 
        <div className="bg-white"> 
        </div>
       <Navbar/>
        <MenuContent />
        <OrderContent />
       <Footer/>
    </div>
    </div>
  
   
  
  )
  
}

export default SliceMenu;
