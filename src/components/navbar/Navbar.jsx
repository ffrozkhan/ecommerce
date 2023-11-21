import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const cartLength = useSelector((state) => state.cartReducer.length);
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <div className="navHead">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="">Categories</Link>
      </div>
      <div className="right">
        <input
          type="search"
          onChange={(e) => dispatch({ type: "SEARCH", data: e.target.value })}
        />
        <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartLength} color="secondary" showZero>
              <ShoppingCartIcon style={{ color: "white" }} />
            </StyledBadge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
