import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import reportWebVitals from "./reportWebVitals";
import RouterPage from "./route";
import ThemeProvider from "./theme";
import ErrorBoundary from "./utils/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <RouterPage />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
