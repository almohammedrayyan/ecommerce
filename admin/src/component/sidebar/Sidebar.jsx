import React, { useContext } from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import "./sidebar.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReorderIcon from "@mui/icons-material/Reorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PatternIcon from "@mui/icons-material/Pattern";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TechStack</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Menu</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardCustomizeOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">List</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2OutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <ReorderIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>

          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Healts</span>
          </li>
          <li>
            <PatternIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">User</p>

          <li>
            <AssignmentIndIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
