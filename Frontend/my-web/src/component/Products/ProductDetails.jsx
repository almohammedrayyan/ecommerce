import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import "./productDetails.css";
import { useAlert } from "react-alert";
import { Rating } from "@material-ui/lab";
import { clearError, getOneProductDetails } from "../../actions/productActions";
import { useParams } from "react-router-dom";
import MetaData from "../../layout/MetaData";
import Loader from "../../layout/Loader";
import Navbar from "../Navbar";
import Announcemnet from "../Announcemnet";
import Footer from "../Footer";
import ReviewCard from "../Card/ReviewCard";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  // console.log("assss", product);
  const options = {
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
    activeColor: "tomato",
    isHalf: true,
  };
  const { id } = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getOneProductDetails(match.params.id));
  }, [dispatch, match.params.id, alert, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product?.name} -- ECOMMERCE`} />
          <Announcemnet />
          <Navbar />
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
          <h3 className="reviewsHeading">Reviews</h3>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews.map((review) => (
                <ReviewCard review={review} />
              ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
