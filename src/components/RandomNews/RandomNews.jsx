import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardSkeleton from "../NewsCard/NewsCardSkeleton";
import "./RandomNews.css";

const RandomNews = () => {
  const moviesNews = useSelector((state) => state.news.randomMoviesNews);
  return (
    <div className="container card-container">
      <div className="row gx-md-5 gy-4">
        {moviesNews.length !== 0 ? (
          moviesNews.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsCard item={item} />
              </div>
            );
          })
        ) : (
          <NewsCardSkeleton />
        )}
      </div>
    </div>
  );
};

export default RandomNews;
