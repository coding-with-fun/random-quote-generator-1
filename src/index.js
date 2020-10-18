import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuotesProvider } from "./context/QuotesContext";
import "./scss/index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <QuotesProvider>
      <App />
    </QuotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
