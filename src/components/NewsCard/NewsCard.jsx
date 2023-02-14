import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { fetchSelectedNews } from "../../features/NewsSlice";
import "./NewsCard.css";

const NewsCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchSelectedNews(item));
  };
  return (
    <div className="card">
      <LazyLoadImage src={item.image} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="card-news-category">{item.publishedAt}</div>
        <Link
          to="/article"
          onClick={handleClick}
          className="card-news-header text-decoration-none text-dark"
        >
          {item.title}
        </Link>
        <div className="news-card-content">{item.description}</div>
        <div className="card-author-info d-flex">
          <img
            src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg"
            alt=""
            className="author-image"
          />
          <div>
            <div className="author-name">{item.author}</div>
            <div className="author-designation">CEO and Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
