import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import NavBar from "../../component/navbar/Navbar";
import "./list.scss";
import Datatable from "../../component/datatable/Datatable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
