import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSelectedNews } from "../../features/NewsSlice";

import "./Carousel.css";
import CarouselSkeleton from "./CarouselSkeleton";

const Carousel = () => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(fetchSelectedNews(item));
  };
  const data = useSelector((state) => state.news.topHeadlines);
  return (
    <div className="container">
      <div className="title-header text-center">Trending</div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.length !== 0 ? (
            data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={
                      index === 0
                        ? "carousel-item active carousel-wrapper"
                        : "carousel-item carousel-wrapper"
                    }
                    data-bs-interval="4000"
                  >
                    <div className="row">
                      <div className="col-md-5 image-container">
                        <LazyLoadImage
                          src={item.image}
                          alt=""
                          effect="blur"
                          className="img"
                        />
                      </div>
                      <div className="col-md-7 info-container">
                        <div className="news-categories">
                          {item.publishedAt}
                        </div>
                        <Link
                          className="news-heading"
                          to="/article"
                          onClick={() => handleClick(item)}
                        >
                          {item.title}
                        </Link>
                        <div className="news-content">{item.description}</div>
                        <div className="author-container d-flex mt-1">
                          <div className="author-image">
                            <img
                              src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="author-name">{item.author}</div>
                            <div className="author-designation">
                              CEO and Founder
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <div className="carousel-item carousel-wrapper">
              <CarouselSkeleton />
            </div>
          )}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
