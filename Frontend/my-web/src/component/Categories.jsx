import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import ConatinerItem from "./ConatinerItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories?.map((item) => (
        <ConatinerItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
