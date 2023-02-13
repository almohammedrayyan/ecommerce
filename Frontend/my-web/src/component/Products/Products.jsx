import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../layout/Loader";
import { useAlert } from "react-alert";
import {
  getALLProduct,
  getALLProductFilter,
} from "../../actions/productActions";
import ProductCard from "../Card/ProductCard";
import Announcement from "../Announcemnet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Products.css";

const ProductList = ({ match }) => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);
  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getALLProduct(keyword));
  }, [dispatch, keyword]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Announcement />
          <Navbar />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
          </div>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductList;
