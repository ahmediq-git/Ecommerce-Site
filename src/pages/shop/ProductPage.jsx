import { Typography, Button } from "@mui/material";
import { ItemImages } from "../../utils/ImageExport";
import Layout from "../../components/Layout";
import { useRef, useEffect, useState, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/CartActions";


const ProductPage = ({ addToCart, removeFromCart, Cart }) => {
  // Renderchecker
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const location = useLocation();

  const [routeParams] = useSearchParams();

  const productName = routeParams.get("productName");
  const color = routeParams.get("color");
  const price = routeParams.get("price");
  const quantity = routeParams.get("quantity");
  const sku = routeParams.get("sku");


  const result=useMemo(()=>Cart.find((item)=>item.sku===sku), [Cart])

  const handleAdd = () => {
    addToCart(sku, productName, color, quantity, price);
  };

  const handleRemove = () => {
    removeFromCart(sku, productName, color, quantity, price);
  };


  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: 100 }}>
      <div style={{ margin: 20, border: "2px solid black" }}>
        <img
          src={ItemImages[routeParams.get("productName")]}
          style={{
            width: 400,
            height: 400,
            objectFit: "cover",
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3,
          }}
        />
      </div>
      <div style={{ marginLeft: 20 }}>
        {console.log(location.state)}
        <Typography sx={{ fontSize: 30, fontWeight: "bold", marginTop: 2 }}>
          {productName || ""}
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}>
          Color: {color || ""}
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: "bold", marginTop: 1 }}>
          Price: {price || ""} PKR
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: "bold", marginTop: 1 }}>
          Available Quantity: {quantity || ""}
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: "bold", marginTop: 1 }}>
          SKU: {sku || ""}
        </Typography>

        <Typography sx={{ fontSize: 20, fontWeight: "bold", mt: "30px" }}>
          Quantity
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 20,
            marginLeft: 0,
          }}
        >
          <Button
            onClick={handleRemove}
            variant="contained"
            sx={{ fontSize: 16, fontWeight: "bold", backgroundColor: "grey" }}
          >
            -
          </Button>
          <Typography sx={{ marginTop: 1.25, marginLeft: 4, marginRight: 4 }}>
            {result?result.quantity:0}
          </Typography>
          <Button
            onClick={handleAdd}
            variant="contained"
            sx={{ fontSize: 16, fontWeight: "bold", backgroundColor: "grey" }}
          >
            +
          </Button>
        </div>

      
        <div>Rendered: {count.current}</div>
        {/* Renderchecker */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Cart: state.cart.cart,
  };
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default Layout(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
