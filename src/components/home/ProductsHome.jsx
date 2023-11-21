import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./Home.css";

const { Sider } = Layout;
const ProductsHome = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector(
    (state) => state.productsReducer.currentProducts
  );
  const getCategories = async () => {
    const response = await axios.get(
      //[cat, cat]
      `https://fakestoreapi.com/products/categories`
    );

    const categoriesMenu = response.data.map((item, index) => {
      //[{key, label}, ]
      return {
        key: index + 1,
        label: item,
      };
    });
    categoriesMenu.unshift({ key: categoriesMenu.length + 1, label: "all" });
    setCategories(categoriesMenu);
  };
  const getProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(response.data);
    dispatch({ type: "ALL_PRODUCTS", data: response.data });
    getCategories();
  };
  useEffect(() => {
    if (allProducts.length == 0) getProducts();
    getCategories();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "15%",
          height: "calc(100vh - 80px)",
          backgroundColor: "#001529",
          position: "fixed",
          top: "80px",
        }}
      >
        <Sider
        // style={{
        //   overflow: "auto",
        //   height: "100vh",
        //   position: "fixed",
        //   left: 0,
        //   top: "80px",
        // }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["5"]}
            items={categories}
            onClick={(e) =>
              dispatch({ type: "CATEGORY", data: e.domEvent.target.innerHTML })
            }
          />
        </Sider>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          // overflow: "auto",
          marginLeft: "15%",
          width: "100%",
        }}
      >
        {allProducts.map((item, index) => (
          <ProductCard key={index} item={item} beingUsed="home" />
        ))}
      </div>
    </div>
  );
};

export default ProductsHome;
