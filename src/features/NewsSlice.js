import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Moment from "moment";
import { newsAPI } from "./Api";

export const fetchTopStories = createAsyncThunk(
  "news/fetchTopStories",
  async () => {
    const response = await newsAPI.get(`/top-headlines?country=in&pageSize=5`);
    return response.data.articles;
  }
);

export const fetchTopSportsNews = createAsyncThunk(
  "news/fetchTopSportsNews",
  async () => {
    const response = await newsAPI.get(
      "/top-headlines?country=in&pageSize=3&category=sports"
    );
    return response.data.articles;
  }
);

export const fetchTopBusinessNews = createAsyncThunk(
  "news/fetchTopBusinessNews",
  async () => {
    const response = await newsAPI.get(
      "/top-headlines?country=us&pageSize=3&category=business"
    );
    return response.data.articles;
  }
);

export const fetchTopMoviesNews = createAsyncThunk(
  "news/fetchTopMoviesNews",
  async () => {
    const response = await newsAPI.get(
      "/top-headlines?country=us&pageSize=6&category=general"
    );
    return response.data.articles;
  }
);

export const fetchTopHeadlinesByCategory = createAsyncThunk(
  "news/fetchTopHeadlinesByCategory",
  async ({ category, page }) => {
    const response = await newsAPI.get(
      `/top-headlines?country=us&category=${category}&page=${page}`
    );
    return response.data.articles;
  }
);

export const fetchSearchResults = createAsyncThunk(
  "news/fetchSearchResults",
  async ({ term, page }) => {
    const response = newsAPI.get(
      `/everything?q=${term}&pageSize=10&page=${page}`
    );
    return response;
  }
);

const initialState = {
  topHeadlines: [],
  categoryNews: [],
  randomMoviesNews: [],
  randomSportsNews: [],
  randomBusinessNews: [],
  selectedNews: [],
  searchNews: [],
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchSelectedNews: (state, { payload }) => {
      state.selectedNews = payload;
    },
    cleanCategoryNews: (state) => {
      state.categoryNews = [];
    },
    cleanSearchNews: (state) => {
      state.searchNews = [];
    },
  },
  extraReducers: {
    [fetchTopStories.fulfilled]: (state, { payload }) => {
      let items = payload.map((item) => {
        return {
          author: item.author === null ? "Unknown" : item.author,
          title: item.title,
          description: item.description,
          image: item.urlToImage,
          link: item.url,
          publishedAt: Moment.utc(
            item.publishedAt,
            "YYYY-MM-DDTHH:mm:ssZ"
          ).format("MMMM Do YYYY"),
          content: item.content,
        };
      });
      return { ...state, topHeadlines: items };
    },
    [fetchTopHeadlinesByCategory.fulfilled]: (state, { payload }) => {
      let items = payload.map((item) => {
        return {
          author: item.author === null ? "Unknown" : item.author,
          title: item.title,
          description: item.description,
          image: item.urlToImage,
          link: item.url,
          publishedAt: Moment.utc(
            item.publishedAt,
            "YYYY-MM-DDTHH:mm:ssZ"
          ).format("MMMM Do YYYY"),
          content: item.content,
        };
      });
      return { ...state, categoryNews: items };
    },
    [fetchTopSportsNews.fulfilled]: (state, { payload }) => {
      let items = payload.map((item) => {
        return {
          author: item.author === null ? "Unknown" : item.author,
          title: item.title,
          description: item.description,
          image: item.urlToImage,
          link: item.url,
          publishedAt: Moment.utc(
            item.publishedAt,
            "YYYY-MM-DDTHH:mm:ssZ"
          ).format("MMMM Do YYYY"),
          content: item.content,
        };
      });
      return { ...state, randomSportsNews: items };
    },
    [fetchTopBusinessNews.fulfilled]: (state, { payload }) => {
      let items = payload.map((item) => {
        return {
          author: item.author === null ? "Unknown" : item.author,
          title: item.title,
          description: item.description,
          image: item.urlToImage,
          link: item.link,
          publishedAt: Moment.utc(
            item.publishedAt,
            "YYYY-MM-DDTHH:mm:ssZ"
          ).format("MMMM Do YYYY"),
          content: item.content,
        };
      });
      return { ...state, randomBusinessNews: items };
    },
    [fetchTopMoviesNews.fulfilled]: (state, { payload }) => {
      let items = payload.map((item) => {
        return {
          author: item.author === null ? "Unknown" : item.author,
          title: item.title,
          description: item.description,
          image: item.urlToImage,
          link: item.url,
          publishedAt: Moment.utc(
            item.publishedAt,
            "YYYY-MM-DDTHH:mm:ssZ"
          ).format("MMMM Do YYYY"),
          content: item.content,
        };
      });
      return { ...state, randomMoviesNews: items };
    },
    [fetchSearchResults.fulfilled]: (state, { payload }) => {
      let items = payload.data.articles.map((item) => {
        return {
          author: item.author === null ? "Unknown" : item.author,
          title: item.title,
          description: item.description,
          image: item.urlToImage,
          link: item.link,
          publishedAt: Moment.utc(
            item.publishedAt,
            "YYYY-MM-DDTHH:mm:ssZ"
          ).format("MMMM Do YYYY"),
          content: item.content,
        };
      });
      return { ...state, searchNews: items };
    },
  },
});
export default NewsSlice.reducer;
export const { fetchSelectedNews, cleanCategoryNews, cleanSearchNews } =
  NewsSlice.actions;
