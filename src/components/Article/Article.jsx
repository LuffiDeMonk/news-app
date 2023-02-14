import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Article.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Article = () => {
  const data = useSelector((state) => state.news.selectedNews);
  return (
    <>
      <Navbar />
      <div className="pt-5 pb-0">
        <div className="container">
          <div className="d-flex flex-column align-items-center mb-4">
            <LazyLoadImage
              src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg"
              alt=""
              className="article-author-image"
              effect="blur"
            />
            <div className="article-author-name">{data.author}</div>
            <div className="article-published-date">{data.publishedAt}</div>
          </div>
          <div className="text-center fw-bold fs-2 text-center mb-5">
            {data.title}
          </div>
          <div className="d-flex justify-content-center mb-5">
            <LazyLoadImage
              src={data.image}
              alt=""
              className="article-image"
              effect="blur"
            />
          </div>
          <div className="article-content">{data.description}</div>
          <div className="article-content">
            Click on the link to find the complete news: &nbsp;
            <a href={data.link} style={{ color: "orangered" }}>
              {data.link}
            </a>
          </div>
          <hr />
          <div className="fs-5 fw-bold mt-5">Share</div>
          <div className="d-flex">
            <div className="footer-icon-container">
              <FaFacebookF />
            </div>
            <div className="footer-icon-container">
              <FaTwitter />
            </div>
            <div className="footer-icon-container">
              <FaInstagram />
            </div>
            <div className="footer-icon-container">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Article;
