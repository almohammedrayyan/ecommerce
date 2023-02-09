import HomePage from "./pages/Home";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Register from "./pages/Register";
import ProductDetails from "../src/component/Products/ProductDetails";
import Login from "./pages/Login";
import Product from "./component/Products/Product";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
