import HomePage from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import ProductDetails from "../src/component/Products/ProductDetails";
import Product from "./component/Products/Product";
import ProductList from "./component/Products/Products";
import Search from "./component/Products/Search";
import SearchBox from "./component/Products/Search";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:keyword" component={ProductList} />

        <Route exact path="/search" component={Search} />

        {/* <Route path="/register" component={<Register />} />
        <Route path="/login" component={<Login />} /> */}
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;
