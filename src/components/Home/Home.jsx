import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTopBusinessNews,
  fetchTopMoviesNews,
  fetchTopSportsNews,
  fetchTopStories,
} from "../../features/NewsSlice";
import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import RandomNews from "../RandomNews/RandomNews";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopStories());
    dispatch(fetchTopSportsNews());
    dispatch(fetchTopBusinessNews());
    dispatch(fetchTopMoviesNews());
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />
      <RandomNews />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
