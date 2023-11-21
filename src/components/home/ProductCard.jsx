import React from "react";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Card.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const ProductCard = ({ item, beingUsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelectedItem = (element) => {
    dispatch({ type: "SELECTED_ITEM", data: element });
    navigate("/details");
  };
  return (
    <div onClick={() => handleSelectedItem(item)} className="cardParent">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="description">
        <h2>{item.title.slice(0, 15) + ".."}</h2>
        <Rating
          name="read-only"
          value={item.rating.rate}
          readOnly
          precision={0.1}
        />
      </div>
      <div className="price">
        <div>
          <b>$ {item.price}</b>
        </div>
        <div>
          {beingUsed === "home" ? (
            <AddShoppingCartIcon
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "ADD_TO_CART", data: item });
              }}
            />
          ) : (
            <DeleteRoundedIcon
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "REMOVE_FROM_CART", data: item });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
