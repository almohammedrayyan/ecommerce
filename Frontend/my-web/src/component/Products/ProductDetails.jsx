import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import "./productDetails.css";

import { Rating } from "@material-ui/lab";
import { getOneProductDetails } from "../../actions/productActions";
import { useParams } from "react-router-dom";
import MetaData from "../../layout/MetaData";
import Loader from "../../layout/Loader";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  // console.log("assss", product);
  const options = {
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneProductDetails(id));
  }, [dispatch, id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product?.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            {/* <p
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                fontWeight: "bold",
                position: "inherit",
              }}
            >{`${product?.name}`}</p> */}

            <div>
              <Carousel autoPlay={true} indicators={false}>
                {product?.images &&
                  product?.images?.map((item, i) => {
                    return (
                      <img
                        className="CarouselImage"
                        key={item?.url}
                        src={item?.url}
                        alt={`${i}Slide`}
                      />
                    );
                  })}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product?.name}</h2>
                <p>Product # {product?._id}</p>
                <div className="detailsBlock-2">
                  <Rating {...options} />
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
      )}
    </Fragment>
  );
};

export default ProductDetails;
