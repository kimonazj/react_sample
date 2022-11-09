// TODO: create a component that displays a single bakery item
import { useState } from "react";
import React from 'react'
import "./BakeryItem.css";

// curItem or props
export default function BakeryItem({curItem, curIndex, updateCart}){
    // or props.item.name
    const curName = curItem.name;
    const curDes = curItem.description;
    const curPrice = curItem.price;
    const curImage = curItem.image;
    const [amount, setAmount] = useState(0)

    return(
        <div className="card">
            <img src={curImage} className="cardimg"></img>
            <div className="cardbody">
                <h3 className="textPadding">{curName}</h3>
                <p className="textPadding">{curDes}</p>
                <p className="textPadding">${curPrice}</p>
                <button onClick={()=>updateCart(curItem)}>Add to Cart</button>
            </div>
        </div>
    )
}