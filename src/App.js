import "./App.css";
import { useState } from "react";
import React, { Component }  from 'react';
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  //set the cart
  function addToCart (item){
    setCart([...cart, item.name]);
    setTotal(total+item.price);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem curItem = {item} curIndex = {index} updateCart = {addToCart}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>

        {cart.map((item, index)=>(
          <p>{item}</p>
        ))}

        <h2>Total</h2>
        {total}
        

      </div>
    </div>
  );
}

export default App;
