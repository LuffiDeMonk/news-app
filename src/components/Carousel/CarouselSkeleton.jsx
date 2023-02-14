import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Carousel.css";

const CarouselSkeleton = () => {
  return (
    <div className="row">
      <div className="col-md-5 image-container">
        <div className="img">
          <Skeleton />
        </div>
      </div>
      <div className="col-md-7 info-container">
        <div className="news-categories">
          <Skeleton />
        </div>
        <div className="news-heading">
          <Skeleton />
        </div>
        <div className="news-content">
          <Skeleton />
        </div>
        <div className="author-container d-flex mt-1">
          <div className="author-image">
            <Skeleton circle={true} width="100%" height="100%" />
          </div>
          <div className="author-name">
            <Skeleton width="5rem" />
          </div>
          <div className="author-designation">
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
