import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Review from "../../component/review/review";
import "./review.scss";
const ReviewPage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Review />
      </div>
    </div>
  );
};

export default ReviewPage;
