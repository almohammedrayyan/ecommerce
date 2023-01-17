import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductList from "./ProductList";
import { getProduct } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import gif from "../layout/amalie-steiness.gif";
import Loader from "../layout/Loader";
import { useAlert } from "react-alert";
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

  const { products, loading, error } = useSelector((state) => state.products);
  const alert = useAlert();
  useEffect(() => {
    dispatch(getProduct());
    if (error) {
      return alert.error(error);
    }
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Heading>Featured Product</Heading>
          <Conatiner>
            {products?.map((product) => {
              return <ProductList product={product} />;
            })}
          </Conatiner>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product;
