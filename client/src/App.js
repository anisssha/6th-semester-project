import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./customer/pages/HomePage/Homepage.jsx";
import Product from "./customer/components/Product/Product.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Order from "./customer/components/Order/Order.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
