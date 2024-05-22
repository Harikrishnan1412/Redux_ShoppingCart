import React from "react";
import "./Product.css";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cart-Slice";
import { useDispatch } from "react-redux";


const Product = ({ name, id, imgURL, price }) => {
  const cartItems = useSelector((state)=>state.cart.itemsList);
  console.log(cartItems);
  const dispatch = useDispatch();
  const addToCart = () =>{
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    )
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
