import React, { createContext, useEffect, useState } from "react";
import { fetchRandomQuote } from "../api/Quotes.api";

export const QuotesContext = createContext();

export const QuotesProvider = (props) => {
  const [quoteData, setQuoteData] = useState([]);
  const [skip, setSkip] = useState(localStorage.getItem("skip") || 0);
  const limit = 10;

  useEffect(() => {
    RandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RandomQuote = () => {
    fetchRandomQuote(limit, skip)
      .then((response) => {
        setQuoteData((quote) => [...quote, ...response.data.results]);
        setSkip(parseInt(skip, 10) + parseInt(limit, 10));
        if (skip > 1995) {
          setSkip(0);
        }
        localStorage.setItem("skip", skip);
      })
      .catch((error) => console.error(error));
  };

  return (
    <QuotesContext.Provider value={{ quoteData, RandomQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
};
