import React from "react"
import "./menu.css"


const Menu = ({title, text, price}) =>  {

    return  (

    <div className="slice__menucontainer__menu">
        <div className="slice__menucontainer__menu-title">
            <h3> {title} </h3>
            </div>
                <div className="slice__menucontainer__menu-text">
                    {text}
                </div>
                <div className="slice__menucontainer__menu-price">
                    {price}
                </div>
        </div>

    )

}

export default Menu;
