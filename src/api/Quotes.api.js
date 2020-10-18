import Axios from "axios";

const BASE_URL = "https://api.quotable.io";

export const fetchRandomQuote = (skip) => {
  return Axios.get(BASE_URL + "/quotes?limit=1&skip=" + skip);
};
