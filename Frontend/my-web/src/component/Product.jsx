import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductList from "./ProductList";
const Conatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Heading = styled.h2`
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 300;
`;

const Product = () => {
  return (
    <>
      <Heading>Featured Product</Heading>
      <Conatiner>
        {popularProducts.map((item) => (
          <ProductList item={item} key={item.id} />
        ))}
      </Conatiner>
    </>
  );
};

export default Product;
