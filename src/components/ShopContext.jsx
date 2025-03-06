import React, { createContext, useState } from "react";
import { Men, Women, Kids, groceriesproduct, mobileProducts, applianceProducts } from "../assets/data";

export const ShopContext = createContext();
const allProducts = [...Men, ...Women, ...Kids, ...groceriesproduct, ...mobileProducts, ...applianceProducts];

export const ShopContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState({});

  const addToCart = (id, callback) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
    if (callback) {
      callback();
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id] > 1) newCart[id] -= 1;
      else delete newCart[id];
      return newCart;
    });
  };

  const deletefromcart=(id)=>{
    setCart((prevCart)=>{
      const newCart = { ...prevCart };
       delete newCart[id];
      return newCart;
    })
  }

  const[user,setUser]=useState(null);
  const handlesignup=(details)=>{
    localStorage.setItem(details.email,JSON.stringify(details));
  }

  const handlelogin=(details)=>{
    const user=JSON.parse(localStorage.getItem(details.email));
    if(user){
      if(user.password!==details.password){
        return false;
      }
      setUser(user);
      return true;
    }
    return false;
  }


  const contextValue={
    allProducts, cart, addToCart, removeFromCart, Men,Women, Kids, groceriesproduct, mobileProducts, applianceProducts,deletefromcart,handlesignup,handlelogin,user,setUser


  }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
