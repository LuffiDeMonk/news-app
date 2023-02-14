import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanSearchNews, fetchSearchResults } from "../../features/NewsSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CategoryCard from "../CategoryCard/CategoryCard";
import "../Category/Category.css";
import CategoryCardSkeleton from "../CategoryCard/CategoryCardSkeleton";

const Search = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const { term } = params;
  const data = useSelector((state) => state.news.searchNews);
  useEffect(() => {
    dispatch(fetchSearchResults({ term, page }));
    return () => {
      dispatch(cleanSearchNews());
    };
  }, [term, page]);
  const handleIncrement = () => {
    setPage(page + 1);
  };
  const handleDecrement = () => {
    setPage(page - 1);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="category-title">Search</div>
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
      <Footer />
    </div>
  );
};

export default Search;
