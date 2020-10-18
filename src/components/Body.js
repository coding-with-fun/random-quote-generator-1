import React, { useContext, useEffect } from "react";
import { QuotesContext } from "../context/QuotesContext";

const Body = () => {
  const { quoteData, RandomQuote } = useContext(QuotesContext);

  useEffect(() => {
    RandomQuote();
  }, []);

  return (
    <div>
      {console.log(quoteData)}
      <h2>Hello {quoteData[0]?.author}!!</h2>
      <p>Quote - {quoteData[0]?.content}</p>
      <div
        onClick={() => {
          RandomQuote();
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Body;
