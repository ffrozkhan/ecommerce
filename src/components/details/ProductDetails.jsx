import React from "react";
import { useSelector  , useDispatch} from "react-redux";
import Rating from "@mui/material/Rating";

import "./Details.css";

const ProductDetails = () => {
  const item = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch()
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
        <div className="Cart_button">
          <button onClick={(e) => {
              e.stopPropagation();
              dispatch({type: "ADD_TO_CART" , data: item});
            }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
