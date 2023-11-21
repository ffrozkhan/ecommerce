import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../home/ProductCard";

const UserCart = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cartItems.map((item, index) => {
        return <ProductCard key={index} item={item} beingUsed="cart" />;
      })}
    </div>
  );
};

export default UserCart;
<h1>User Cart</h1>;
