import React, { Fragment, useContext, useEffect, useState } from "react";
import { QuotesContext } from "../context/QuotesContext";

const Body = () => {
  const { quoteData, RandomQuote } = useContext(QuotesContext);

  const [currentQuote, setCurrentQuote] = useState({
    content: "",
    author: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === quoteData.length - 1) {
      RandomQuote();
    }
    quoteData[currentIndex] && setCurrentQuote(quoteData[currentIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quoteData, currentIndex]);

  return (
    <div className="quote__body">
      <div className="quote__container">
        <div className="quote">
          {currentQuote.content === "" ? (
            <div className="loader__container">
              <div className="loader"></div>
            </div>
          ) : (
            <Fragment>
              <div className="content">{currentQuote.content}</div>
              <div className="author">
                <cite>{currentQuote.author}</cite>
              </div>
            </Fragment>
          )}
        </div>
        <div className="nav__container">
          <div className="nav__btn">
            <button
              disabled={currentIndex === 0 ? true : false}
              onClick={() => {
                setCurrentIndex(currentIndex - 1);
              }}
            >
              Prev
            </button>
            <button
              disabled={!quoteData[currentIndex + 1]?.content ? true : false}
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
