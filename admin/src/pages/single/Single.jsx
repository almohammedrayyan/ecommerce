import React from "react";
import "./single.scss";
import SideBar from "../../component/sidebar/Sidebar";
import NavBar from "../../component/navbar/Navbar";
const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleConatiner">
        <NavBar />
      </div>
    </div>
  );
};

export default Single;
