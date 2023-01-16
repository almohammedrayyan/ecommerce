import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductList from "./ProductList";
import { getAllProduct } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import gif from "../layout/amalie-steiness.gif";
import Loader from "../layout/Loader";
const Conatiner = styled.div`
  margin: 2vmax auto;
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`;
const Heading = styled.h2`
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 300;
`;

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <Fragment>
      <Heading>Featured Product</Heading>
      <Conatiner>
        {products && products?.map((item) => <ProductList item={item} />)}
      </Conatiner>
    </Fragment>
  );
};

export default Product;
