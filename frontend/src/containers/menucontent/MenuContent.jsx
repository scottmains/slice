import React from 'react';
import './menucontent.css'
import {Menu} from '../../components'
import Jump from 'react-reveal/Jump';

const MenuContent = () => {
  return  (
    
  <div className="slice__menucontent section__padding ">
    <Jump>
    <div className="slice__menucontent-header">
      <h1> MENU </h1>
      </div>
      </Jump>
      <div className="slice__menucontent-container">
        <h2> DETROIT STYLE PIZZA </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Classic" text="Cheese blend, house red sauce, basil and parmesan" price="£13.00"/>
      <Menu title="Detroit" text="Cheese blend, house red sauce, pepperoni and hot honey." price="£13.00"/>
      <Menu title="Spicy Veggie" text="Calabrian chilli peppers, pickled jalapeno, red onion, house red sauce and green habanero chilli sauce." price="£13.00"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Nduja" text="Cheese blend, house red sauce, nduja and sun-dried tomatoes." price="£13.00"/>
      <Menu title="Smokey" text="Chicken, smokey pancetta, garlic ranch dressing and cheese dressing." price="£13.00"/>
      <Menu title="Spicy Veggie" text="Calabrian chilli peppers, pickled jalapeno, red onion, house red sauce and green habanero chilli sauce." price="£13.00"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Veggie" text="Roasted peppers, onions, mushrooms, cheese blend, house red sauce and evoo." price="£13.00"/>
      <Menu title="G.O.A.T" text="Goats cheese, caramelised red onion chutney, house red sauce and cheese blend." price="£13.00"/>
      <Menu title="Half and Half " text="Choose any available toppings split across two halves of the pizza"price="£13.00"/>
        </div>
      </div>
      <div className="slice__menucontent-container">
      <h2> NEOPOLITAN STYLE PIZZA </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Pepperoni" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Pepperoni" price="£9.50"/>
      <Menu title="Salami" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Napoli Salami, Roquito Chilli Peppers with a Hot Honey Drizzle" price="£9.50"/>
      <Menu title="Nduja" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Spicy Nduja Sausage" price="£10.00"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Proscuitto" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Proscuitto, Rocket, Parmesan and evoo" price="£11.00"/>
      <Menu title="Margherita" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Basil, Extra Virgin Olive Oil" price="£8.50"/>
      <Menu title="Spicy Veggie" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Red Onion, Chilli Peppers and Pickled Jalapenos" price="£9.00"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Veggie" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Red Onion, Mushroom and Roasted Peppers" price="£9.00"/>
      <Menu title="Ham and Mushroom" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Ham, Mushroom and Evoo" price="£9.50"/>
      <Menu title="Carne" text="San Marzano Tomatoes, Fior Di Latte Mozzarella, Pepperoni, Nduja and Smoked Pancetta" price="£11.00"/>
        </div>
        <div className="slice__menucontent-container__menu-text">
      <Menu title="Calzone" text="Folded Pizza with San Marzano Tomatoes, Fior Di Latte Mozzarella, Pepperoni, Ham and Mushroom." price="£9.50"/>
      <Menu title="Marinara" text="San Marzano Tomatoes, Oregano, Garlic, Basil and Extra Virgin Olive Oil" price="£8.00"/>
      </div>
        </div>
        <div className="slice__menucontent-container">
      <h2> GARLIC BREAD </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Garlic Bread with Cheese (Detroit Style)" text="Garlic butter with Cheese & Oregano on our Detroit Style base." price="£7.00"/>
      <Menu title="Garlic Bread with Cheese (Neapolitan Style)" text="Garlic Butter with Cheese & Oregano on our light and airy Neapolitan base." price="£7.00"/>
        </div>
        </div>
        <div className="slice__menucontent-container">
      <h2>SIDES</h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Pizza Fries" text="Skinny fries with our house red sauce and melted cheese." price="£5.00"/>
      <Menu title="Fries" text="Skinny fries topped with garlic salt and grated parmesan." price="£3.00"/>
     </div>
     <div className="slice__menucontent-container__menu-text">
      <Menu title="Southern Fried Chicken Tenders" text="Chicken tenders fried in batter and herbs and spices." price="£5.00"/>
      <Menu title="Mozzerella Dippers" text="Deep fried mozzarella paired with our slow roasted house red sauce topped with parmesan cheese." price="£5.00"/>
     </div>
        </div>
        <div className="slice__menucontent-container">
      <h2>DIPS </h2>
      <div className="slice__menucontent-container__menu-text">
      <Menu title="Hot Honey Dip" text="Skinny fries with our house red sauce and melted cheese." price="£1.00"/>
      <Menu title="Garlic Mayo Dip" text="Skinny fries topped with garlic salt and grated parmesan." price="£1.00"/>
     </div>
     <div className="slice__menucontent-container__menu-text">
      <Menu title="BBQ Dip" text="Chicken tenders fried in batter and herbs and spices." price="£1.00"/>
      <Menu title="Sriracha Chilli Sauce" text="Deep fried mozzarella paired with our slow roasted house red sauce topped with parmesan cheese." price="£1.50"/>
     </div>
        </div>
        </div>
  
 
  )
  
 
}

export default MenuContent;