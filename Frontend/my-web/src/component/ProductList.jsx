// // import { Container } from "@material-ui/core";
// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FaRupeeSign } from "react-icons/fa";
// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
// `;

// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;
//   &:hover ${Info} {
//     opacity: 1;
//   }
// `;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: #f5fbfd;
//   position: absolute;
// `;

// const Image = styled.img`
//   height: 65%;
//   z-index: 2;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;
//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;
// const Title = styled.p`
//   font-size: 17px;
//   position: absolute;
//   bottom: 0;
//   margin-bottom: 30px;
//   font-family: "Raleway";
//   font-weight: 600;
// `;
// const Price = styled.span`
//   font-size: 15px;
//   position: absolute;
//   bottom: 0;
//   margin-bottom: 17px;
//   font-family: "Raleway";
//   font-weight: 600;
// `;
// const Main = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 85%;
// `;
// const options = {
//   edit: false,
//   color: "rgb(20,20,20,0.1)",
//   activeColor: "tomato",
//   size: window.innerWidth < 600 ? 20 : 25,
//   value: 2.5,
//   isHalf: true,
// };
// const Mai = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: end;
// `;
// const ProductList = ({ product }) => {
//   return (
//     <>
//       <Container>
//         <Circle />
//         <Image src={product.img} />
//         <Info>
//           <Icon>
//             <ShoppingCartOutlined />
//           </Icon>
//           <Icon>
//             <SearchOutlined />
//           </Icon>
//           <Icon>
//             <Link to="/single-product" style={{ textDecoration: "none" }}>
//               <FavoriteBorderOutlined />
//             </Link>
//           </Icon>
//         </Info>
//         <Main>
//           <Title>{product.title}</Title>
//           <Price>
//             <FaRupeeSign
//               style={{ position: "relative", top: "4px", left: "-3px" }}
//             />
//             2000
//           </Price>
//           <Mai>
//             <p style={{ position: "absolute", top: "-17px" }}> (201 reviews)</p>
//             <ReactStars {...options} />
//           </Mai>
//         </Main>
//       </Container>
//     </>
//   );
// };

// export default ProductList;

import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./product.css";
import styled from "styled-components";


const ProductList = ({ product }) => {
  
const options = {
  value: product.ratings,
  readOnly: true,
  precision: 0.5,
};
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
    <img src={product.images[0].url} alt={product.name} />
    <p>{product.name}</p>
    <div>
      <ReactStars {...options} />{" "}
      <span className="productCardSpan">
        {" "}
        ({product.numOfReviews} Reviews)
      </span>
    </div>
    <span>{`₹${product.price}`}</span>
  </Link>
  );
};

export default ProductList;
