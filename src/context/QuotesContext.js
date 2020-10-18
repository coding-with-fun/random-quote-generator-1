import React, { createContext, useState } from "react";
import { fetchRandomQuote } from "../api/Quotes.api";

export const QuotesContext = createContext();

export const QuotesProvider = (props) => {
  const [quoteData, setQuoteData] = useState([]);
  const [skip, setSkip] = useState(0);

  const RandomQuote = async () => {
    const response = await fetchRandomQuote(skip);
    console.log(response);
    setQuoteData((quote) => [...quote, ...response.data.results]);
    setSkip(skip + 1);
  };
  return (
    <QuotesContext.Provider value={{ quoteData, RandomQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
};
