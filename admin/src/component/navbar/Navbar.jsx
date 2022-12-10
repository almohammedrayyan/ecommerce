import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import avatar from "../../image/images.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <PublicIcon className="icon" />
            English
          </div>
          <div className="item">
            <PublicIcon className="icon" />
          </div>
          <div className="item">
            <PublicIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <PublicIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <PublicIcon className="icon" />
          </div>
          <div className="item">
            <img src={avatar} className="avatar" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
