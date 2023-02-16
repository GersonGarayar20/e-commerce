import Checkout from "../pages/Checkout/index";
import Signup from "../pages/signup/index";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Test from "../pages/test";
import Product from "../pages/product";

/* components */

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/:product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}
