import React from "react"
import './body.css'
import {BiBriefcase } from "react-icons/bi";
import {BiNotification} from "react-icons/bi";
import {BiChevronRight} from "react-icons/bi";


const Body=()=> {
  return (
    <div className="main">
    <h3 className="h3">All fast food is</h3>
    <h3 className="h3">Available at foodle</h3>
    <img  className="hellen" src="grilsundwhich.png" alt="hellen"/>
    <p className="p">We Are Just A Click Away When You</p>
    <p className="p">Crave For Fast Delicious Food</p>

    <button className="btn2">< BiBriefcase/> Buy Now</button>
    <img className="icon" src="./Images/pizza.png" alt="icon"/>
    <h3 className="order">How to order</h3>
    {/* <img className="sandwitch" src={sandwitchImg} alt="sandwitch"/> */}

   <div className="deliveries">
   <div>
   <BiNotification/>
   <h2>Fast Delivery</h2>
   <p>The food will Be Delivered To</p>
   <p>Your Home Within 1-2 Hours Of</p>
   <p>Your Ordering</p>


   </div>
   <div>
   <BiNotification/>
   <h2>Fresh Food</h2>
   <p>Your Food Will Be Delivered on time</p>
   <p>100% Fresh To Your Home </p>
   <p>Do Not Deliver Stale Food Trust us</p>
   </div>
   <div>
   <BiNotification/>
   <h2>Free Delivery</h2>
   <p>Your Food Delivery Is</p>
   <p>Absolutely Free No Cost</p>
   <p>Just Order And Enjoy</p>


   </div>
   </div>
   <h3 className="category">Best <span className="span">Delivered</span> </h3>
   <h3 className="category">Categories </h3>
   <p className="paragraph">Here Are Some Of Our Best Distributed</p>
   <p className="paragraph">Categories.If You Want You Can Order</p>
   <p className="paragraph">From Here</p>
   <div className="categ">
   <div>
   {/* <img className="burger" src={burgerImg } alt="burger"/> */}
   <h2>Chicken Burger</h2>
   <p className="p1">Orer Now<BiChevronRight/></p>

   </div>
   <div>
   {/* <button className="btn2">< BiBriefcase/> Buy Now</button>
    <img className="icon" src="./Images/pizza.png" alt="icon"/>
    <h3 className="order">How to order</h3> */}
   {/* <img className="pizza" src={pizzaImg } alt="pizza"/> */}
   <h2>Chicken Pizza</h2>
   <p className="p1">Orer Now<BiChevronRight/></p>

   </div>
   <div>
   <img className="icon" src="/./Images/crispy-Fried-Chick.jpg" alt="icon"/>
   <h2>French Fries</h2>
   <p className="p1">Oder Now <BiChevronRight/></p>

   </div>
   </div>

   <h3 className="s">Our <span className="span">Regular</span> Menu</h3>
   <p className="p2">These Are Our Regular Menus.You Can</p>
   <p className="p2">Order Anything You Like</p>
   <button className="btn3">See All</button>
    
      
    </div>
  )
}

export default Body;