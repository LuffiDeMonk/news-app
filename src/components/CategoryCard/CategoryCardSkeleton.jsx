import React from "react";
import Skeleton from "react-loading-skeleton";
import "./CategoryCard.css";

const CategoryCardSkeleton = ({ content }) => {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((item, index) => {
          return (
            <>
              <div className="col-12 col-xl-3 category-card-image">
                <Skeleton height="100%" />
              </div>
              <div className="col-sm-12 col-xl-9">
                <div className="category-card-links">
                  <Skeleton />
                </div>
                <div className="category-card-title">
                  <Skeleton />
                </div>
                <div className={content ? "category-card-content" : "d-none"}>
                  <Skeleton count={3} />
                </div>
                <div className="d-flex mt-2">
                  <div className="author-image">
                    <Skeleton circle={true} width="100%" height="100%" />
                  </div>
                  <div>
                    <div className="author-name">
                      <Skeleton width="5rem" />
                    </div>
                    <div className="author-designation">
                      <Skeleton />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default CategoryCardSkeleton;
