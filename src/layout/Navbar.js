import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="d-flex p-3 justify-content-between">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>

        <div>
          <Link to="/watchlist" className="btn btn-sm btn-danger ml-3">
            Watch List
          </Link>
          <button className="btn btn-sm btn-outline-primary  ml-3">
            Login In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
