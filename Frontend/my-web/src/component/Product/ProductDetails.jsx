import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import "./productDetails.css";
import { productDetails } from "../../actions/productActions";
import ReactStars from "react-rating-stars-component";
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const options = {
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };
  useEffect(() => {
    dispatch(productDetails(match?.params?.id));
  }, [dispatch, match?.params?.id]);
  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product?.images &&
              product?.images?.map((item, i) => {
                <img
                  className="CraouselImage"
                  key={item?.url}
                  src={item?.url}
                  alt={`${i}Slide`}
                />;
              })}
          </Carousel>
        </div>
        <div>
          <div className="detailsBlock-1">
            <h2>{product?.name}</h2>
            <p>Product # {product?._id}</p>
            <div className="detailsBlock-2">
              <ReactStars {...options} />
              <span>({product?.numOfReviews} Reviews)</span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`₹ ${product?.price}`}</h1>
            </div>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input value="1" type="number" />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>
            <p>
              Status:{""}
              <b className={product?.stock < 1 ? "redColor" : "greenColor"}>
                {product?.stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>
          <div className="detailsBlocks-4">
            Description:<p>{product?.description}</p>
          </div>
          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
