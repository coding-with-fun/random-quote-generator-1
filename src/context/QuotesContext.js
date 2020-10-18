import React, { createContext, useEffect, useState } from "react";
import { fetchRandomQuote } from "../api/Quotes.api";

export const QuotesContext = createContext();

export const QuotesProvider = (props) => {
  const [quoteData, setQuoteData] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 2;

  useEffect(() => {
    RandomQuote();
  }, []);

  const RandomQuote = () => {
    fetchRandomQuote(limit, skip)
      .then((response) => {
        setQuoteData((quote) => [...quote, ...response.data.results]);
        setSkip(skip + limit);
      })
      .catch((error) => console.error(error));
  };

  return (
    <QuotesContext.Provider value={{ quoteData, RandomQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
};
