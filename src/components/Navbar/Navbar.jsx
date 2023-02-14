import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { fetchTopHeadlinesByCategory } from "../../features/NewsSlice";

const category = [
  "Travel",
  "Food",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Navbar = () => {
  const [bodyStyles, setBodyStyles] = useState({});
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    document.body.style = bodyStyles;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${term}`);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-3 order-3 order-md-1">
            <form className="search-control" onSubmit={(e) => handleSubmit(e)}>
              <div className="search-icon">
                <BiSearch />
              </div>
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                onChange={(event) => setTerm(event.target.value)}
              />
              <button type="submit" className="d-none"></button>
            </form>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center">
            <Link
              className="navbar-heading text-uppercase text-decoration-none text-dark"
              to="/"
            >
              MagDesign
            </Link>
          </div>
          <div className="col-md-3 order-2 order-md-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="d-flex justify-content-between icon-container">
                <div className="icon">
                  <FaTwitter />
                </div>
                <div className="icon">
                  <FaFacebook />
                </div>
                <div className="icon">
                  <FaLinkedin />
                </div>
              </div>
              <div
                className="hamburgerIcon"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <GiHamburgerMenu size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="offcanvas-list d-flex flex-column">
            <Link to="/" className="li" onClick={() => handleClick()}>
              Home
            </Link>
            <div className="li">Categories</div>
            {category.map((item, index) => {
              return (
                <Link
                  className="li"
                  to={`/category/${item}`}
                  key={index}
                  onClick={() => handleClick()}
                >
                  {item}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
