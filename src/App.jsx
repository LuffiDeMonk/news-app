import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Article from "./components/Article/Article";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/article" element={<Article />} />
      <Route path="/search/:term" element={<Search />} />
    </Routes>
  );
};

export default App;
