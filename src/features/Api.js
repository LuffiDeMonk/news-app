import Axios from "axios";

const API_KEY = "963b731aa8f9413a88d6cbabc160917c";

export const newsAPI = Axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apikey: API_KEY,
  },
});
