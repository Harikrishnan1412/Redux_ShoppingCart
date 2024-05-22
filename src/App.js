import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-Slice";
import { fetchData, sendCartData } from "./store/cart-action";
let isFirstRender = true;

function App() {
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  const cart = useSelector((state)=>state.cart);
  const notification = useSelector((state)=>state.ui.notification);
  const dispatch = useDispatch();
  console.log("Inside App.js src");
  console.log(cart)

// Another Useeffect for fetchdata function
useEffect(()=>{
  dispatch(fetchData())
},[dispatch]);


// Using useEffect to find changes in Cart and update in firbase database using put
// Use .json extention to avoid cors

// to handle notification from database use send request function and separate slice to manage it
  useEffect(() => {
    if(isFirstRender)
      {
        isFirstRender = false;
        return;
      }
      if(cart.changed){
        dispatch(sendCartData(cart));
      }
},[cart,dispatch]);


  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {!isLoggedIn && <Auth />}
      
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
