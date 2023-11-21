import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import ProductsHome from "./home/ProductsHome";
import ProductDetails from "./details/ProductDetails";
import UserCart from "./cart/UserCart";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsHome />} />
          <Route path="/cart" element={<UserCart />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
