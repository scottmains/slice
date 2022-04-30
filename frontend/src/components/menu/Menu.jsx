import React from "react"
import "./menu.css"


const Menu = ({title, text, price}) =>  {

    return  (

    <div className="slice__menucontainer__menu">
        <div className="slice__menucontainer__menu-title">
            <h3> {title}  </h3>  
            </div>
                <div className="slice__menucontainer__menu-text">
                    {text}
                </div> 
                <p className="font-bold">{price} </p> 
        </div>

    )

}

export default Menu;
