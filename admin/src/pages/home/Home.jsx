import React from "react";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Tables from "../../component/table/Table";
import Widgets from "../../component/widgets/Widgets";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContianer">
          <div className="listTitle">Latest Transaction</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
