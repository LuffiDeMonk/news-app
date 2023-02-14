import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryCardSkeleton from "../CategoryCard/CategoryCardSkeleton";
import "./Categories.css";

const Categories = () => {
  const sports = useSelector((state) => state.news.randomSportsNews);
  const business = useSelector((state) => state.news.randomBusinessNews);
  return (
    <div className="container mb-5">
      <div className="row gx-2 gy-3">
        <div className="col-md-6">
          <div className="category-header">Sports</div>
          <div className="row gx-md-3 gy-4">
            {sports.length !== 0 ? (
              sports.map((item, index) => {
                return <CategoryCard key={index} content={false} item={item} />;
              })
            ) : (
              <CategoryCardSkeleton content={false} />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="category-header">Business</div>
          <div className="row gx-md-3 gy-4">
            {business.length !== 0 ? (
              business.map((item, index) => {
                return <CategoryCard key={index} content={false} item={item} />;
              })
            ) : (
              <CategoryCardSkeleton content={false} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
