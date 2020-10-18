import Axios from "axios";

const BASE_URL = "https://api.quotable.io";

export const fetchRandomQuote = (limit, skip) => {
  return Axios.get(BASE_URL + "/quotes?limit=" + limit + "&skip=" + skip);
};
