import React, { useContext, useEffect, useState } from "react";
import { QuotesContext } from "../context/QuotesContext";

const Body = () => {
  const { quoteData, RandomQuote } = useContext(QuotesContext);

  const [currentQuote, setCurrentQuote] = useState({
    content: "",
    author: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const getPrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    if (currentIndex === quoteData.length - 1) {
      RandomQuote();
    }
    quoteData[currentIndex] && setCurrentQuote(quoteData[currentIndex]);
  }, [quoteData, currentIndex]);

  return (
    <div className="quote__body">
      <div className="quote__container">
        <div className="quote">
          <div className="content">{currentQuote.content}</div>
          <div className="author">
            <cite>{currentQuote.author}</cite>
          </div>
        </div>
        <div className="nav__container">
          <div className="nav__btn">
            <div
              className="prev__btn"
              onClick={() => {
                getPrev();
              }}
            >
              Prev
            </div>
            <div
              className="next__btn"
              onClick={() => {
                getNext();
              }}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
