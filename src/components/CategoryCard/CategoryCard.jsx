import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { fetchSelectedNews } from "../../features/NewsSlice";
import "./CategoryCard.css";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

const CategoryCard = ({ content, item }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(fetchSelectedNews(item));
  };
  return (
    <>
      {item ? (
        <>
          <div className="col-sm-12 col-xl-3 category-card-image">
            <LazyLoadImage
              src={item.image}
              alt=""
              className={content && "image-content"}
              effect="blur"
            />
          </div>
          <div className="col-sm-12 col-xl-9">
            <div className="category-card-links">{item.publishedAt}</div>
            <Link
              to={`/article`}
              className="category-card-title"
              onClick={() => handleClick(item)}
            >
              {item.title}
            </Link>
            <div className={content ? "category-card-content" : "d-none"}>
              {item.description}
            </div>
            <div className="d-flex mt-2">
              <LazyLoadImage
                src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg"
                alt=""
                className="author-image"
                effect="blur"
              />
              <div>
                <div className="author-name">{item.author}</div>
                <div className="author-designation">CEO and Founder</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryCard;
