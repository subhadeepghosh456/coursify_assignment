import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">Logo</a>
      <div className="navbar-items">
        <div className="dropdown">
          <a href="#">Region {<BsArrowDownCircle />}</a>

          <div className="dropdown-content">
            <a href="#">India</a>
            <a href="#">Out side India</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Role {<BsArrowDownCircle />}</a>

          <div className="dropdown-content">
            <a href="#"> Data Science</a>
            <a href="#">Software engineer</a>
            <a href="#">Product Managers</a>
            <a href="#">Data Scientist </a>
          </div>
        </div>
        <a href="#">Pricing</a>
        <a href="#">Refer & earn</a>
        <a href="#">For employers</a>
      </div>
    </div>
  );
};

export default Navbar;
