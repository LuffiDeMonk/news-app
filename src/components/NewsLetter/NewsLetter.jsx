import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="container-fluid newsletter-wrapper p-3 d-flex align-items-center justify-content-center">
      <form className="d-flex">
        <input type="email" className="mx-2" />
        <button className="btn btn-success">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
