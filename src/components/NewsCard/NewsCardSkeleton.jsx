import React from "react";
import Skeleton from "react-loading-skeleton";
import "./NewsCard.css";

const NewsCardSkeleton = () => {
  return (
    <>
      {Array(6)
        .fill(0)
        .map((item, index) => {
          return (
            <div className="col-md-4">
              <div className="card">
                <div className="card-image-top" style={{ height: "15rem" }}>
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="card-body">
                  <div className="card-news-category">
                    <Skeleton />
                  </div>
                  <div className="card-news-header">
                    <Skeleton />
                  </div>
                  <div className="news-card-content">
                    <Skeleton count={2} />
                  </div>
                  <div className="card-author-info d-flex">
                    <Skeleton
                      className="author-image"
                      circle={true}
                      width="2rem"
                      height="2rem"
                    />
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
              </div>
            </div>
          );
        })}
    </>
  );
};

export default NewsCardSkeleton;
