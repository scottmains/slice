import React from 'react';
import './menucontent.css'
import {Menu} from '../../components'
import Jump from 'react-reveal/Jump';
import sliceheaderimg from '../../assets/sliceheaderimg.svg'
const MenuContent = () => {
  return  (
    
  <div className="slice__menucontent section__padding ">
    <Jump>
    <div className="slice__menucontent-header ">
    <img className="w-20 mx-auto" src={sliceheaderimg}/>
      <h1> MENU </h1>
      </div>
      </Jump>
      <div className="slice__menucontent-container">
        <h2> DETROIT STYLE PIZZA </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Red Top" text="Keeping it simple! Chees blend & house red sauce (v)" price="£11.95"/>
      <Menu title="Detroit Pep" text="Pepperoni, cheese blend, house red sauce, hot honey" price="£14.50"/>
      <Menu title="Classic v2" text="Cheese blend, house red sauce, shredded basil, grated parmersan, creamy burrata, chilli flakes, garlic oil" price="£13.50"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Spinach & Ricotta" text="Cheese blend, house red sauce, spinach, caramelised red onion, whipped ricotta, shredded basil (v)" price="£14.50"/>
      <Menu title="Meat Feast" text="Cheese blend, house red sauce, spinach, caramelised red onion, whipped ricotta, shredded basil (v)" price="£14.50"/>
      <Menu title="Spice Up Ya Life" text="Cheese blend, spicy nduja sausage, jalapenos, red onion, house red sauce" price="£14.50"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Smokey" text="Cheese blend, chicken, smokey pancetta, garlic ranch dressing" price="£14.50"/>
      <Menu title="Garlic Butter Chicken" text="Garlic butter base, cheese blend, garlic chicken, house red sauce, fresh parsley" price="£14.95"/>
      <Menu title="Half and Half " text="Can't decide or want to share? Choose any half & half!" price="£14.50"/>
        </div>
      </div>
      <div className="slice__menucontent-container">
      <h2> NEOPOLITAN STYLE PIZZA </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Marinara" text="Tomato sauce, oregano, garlic, basil, evoo (ve)" price="£8.00"/>
      <Menu title="Margherita" text="Tomato sauce, mozzarella, parmesan, basil, evoo - ask for no parm for (v) (add burrata for £2.50)" price="£9.50"/>
      <Menu title="Pepperoni" text="Tomato sauce, mozzarella, parmesan, basil, pepperoni" price="£10.50"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Portobello" text="Mozzarella, portobello mushroom, basil, oregano, sea salt, parmesan, garlic oil (white pizza)" price="£10.50"/>
      <Menu title="Meaty Boi" text="Tomato sauce, mozzarella, pepperoni, chicken, smoked pancetta, ham" price="£12.95"/>
      <Menu title="Spicy Boi" text="Tomato sauce, mozzarella, pepperoni, chorizo, jalapenos, chilli flakes, chilli oil" price="£12.95"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Proscuitto" text="Tomato sauce, mozzarella, proscuitto crudo, rocket, parmesan shavings, evoo" price="£12.95"/>
      <Menu title="Nduja" text="Tomato sauce, mozzarella, spicy nduja sausage, red onion" price="£12.95"/>
      <Menu title="Calzone" text="Folded pizza filled with ham, mushroom, mozzarella & topped with tomato sauce" price="£10.95"/>
        </div>
      
        </div>
        <div className="slice__menucontent-container">
      <h2> SHARERS </h2>
      <p> Please specify Detroit/Neo style for Garlic Breads! </p>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Burrata & Proscuitto" text="Fresh burrata with olive oil & balsamic glaze, proscuitto crudo & rocket" price="£7.00"/>
      <Menu title="Garlic Bread" text="Garlic butter base" price="£6.00"/>
      <Menu title="Garlic Bread with Cheese" text="Garlic butter base, mozzarella" price="£8.00"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Focaccia Sticks & Olives" text="Freshly baked focaccia sticks with rosemary & garlic. Comes with pitted olives, evoo & balsamic vinegar" price="£7.00"/>
      <Menu title="Garlic Dough Knots" text="Freshly baked dough knots tossed in garlic butter & parsley" price="£6.00"/>
      <Menu title="Tomato Rosemary Bread" text="Tomato sauce, rosemary, basil, evoo" price="£6.00"/>
        </div>
        </div>
        <div className="slice__menucontent-container ">
      <h2>SIDES</h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Fries" text="Skin on fries with garlic salt & grated parmesan cheese" price="£2.50/£3.50"/>
      <Menu title="Pizza Fries" text="Skin on fries topped with our house red sauce & melted cheese. Add pepperoni for £1" price="£5.00"/>
     </div>
     <div className="slice__menucontent-container__menu-text">
      <Menu title="Southern Fried Chicken Tenders" text="Chicken tenders fried in batter and herbs and spices, served with a dip" price="£5.00"/>
      <Menu title="Mozzerella Dippers" text="Deep fried mozzarella paired with our slow roasted house red sauce topped with parmesan cheese." price="£5.00"/>
     </div>
        </div>
        <div className="slice__menucontent-container">
      <h2>DIPS </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Hot Honey" text="" price="£1.00"/>
      <Menu title="Garlic Mayo" text="" price="£1.00"/>
      <Menu title="Chipotle Mayo" text="" price="£1.00"/>
     </div>
     <div className="slice__menucontent-container__menu-text">
      <Menu title="BBQ Dip" text="" price="£1.00"/>
      <Menu title="Sriracha Chilli Sauce" text="" price="£1.30"/>
     </div>
        </div>
        <div className="slice__menucontent-container text-center">
      <h2>DRINKS</h2>
      <div className="slice__menucontent-container__menu-text text-center">
      <Menu title="San Peligrino Lemon" text="" price="£1.50"/>
      <Menu title="Coca-Cola" text="" price="£1.50"/>
     </div>
     <div className="slice__menucontent-container__menu-text">
      <Menu title="Coca-Cola Diet" text="" price="£1.50"/>
      <Menu title="Sprite" text="" price="£1.50"/>
     </div>
        </div>
        </div>
  
 
  )
  
 
}

export default MenuContent;