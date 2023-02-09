import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../layout/Loader";
import { useAlert } from "react-alert";
import { getALLProduct } from "../../actions/productActions";
import ProductCard from "../Card/ProductCard";
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
    if (error) {
      return alert.error(error);
    }
    dispatch(getALLProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Heading>Featured Product</Heading>
          <Conatiner>
            {products &&
              products.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
          </Conatiner>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product;
