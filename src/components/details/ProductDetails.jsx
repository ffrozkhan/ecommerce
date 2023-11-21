import React from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

import "./Details.css";

const ProductDetails = () => {
  const item = useSelector((state) => state.selectedItem);
  return (
    <div className="parent">
      <div className="item-image">
        <img src={item.image} alt="" />
      </div>
      <div className="item-details">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <b>{item.price}</b>
        <div>
          <Rating
            name="read-only"
            value={item.rating.rate}
            readOnly
            precision={0.1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
