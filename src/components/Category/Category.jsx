import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CategoryCard from "../CategoryCard/CategoryCard";

import "./Category.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCategoryNews,
  fetchTopHeadlinesByCategory,
} from "../../features/NewsSlice";
import CategoryCardSkeleton from "../CategoryCard/CategoryCardSkeleton";

const Category = () => {
  const [page, setPage] = useState(1);
  const params = useParams();
  const { category } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopHeadlinesByCategory({ category, page }));
    return () => {
      dispatch(cleanCategoryNews());
    };
  }, [category, page]);
  const handleIncrement = () => {
    setPage(page + 1);
  };
  const handleDecrement = () => {
    setPage(page - 1);
  };
  const data = useSelector((state) => state.news.categoryNews);
  return (
    <div>
      <Navbar />
      <div className="pt-5 pb-0">
        <div className="container">
          <div className="text-uppercase text-secondary category">
            Categories
          </div>
          <div className="category-title">{category}</div>
          <div className="row gx-md-3 gy-4">
            {data.length !== 0 ? (
              data.map((item, index) => {
                return <CategoryCard content={true} key={index} item={item} />;
              })
            ) : (
              <CategoryCardSkeleton content={true} />
            )}
          </div>
          <div
            className={page > 1 ? "float-start my-5 p-2 bg-success" : "d-none"}
            onClick={() => handleDecrement()}
            style={{ cursor: "pointer" }}
          >
            Previous Page
          </div>
          <div
            className="float-end my-5 p-2 bg-success"
            onClick={() => handleIncrement()}
            style={{ cursor: "pointer" }}
          >
            Next Page
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
