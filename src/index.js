import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sanket's Portfolio</title>
      <meta
        name="description"
        content="Professional portfolio of Sanket Dhandhlya, Web Developer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://sanket-gilt.vercel.app/" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sanket-gilt.vercel.app/" />
      <meta property="og:title" content="Sanket's Portfolio" />
      <meta
        property="og:description"
        content="Professional portfolio of Sanket Dhandhlya, Web Developer"
      />
      <meta property="og:image" content="./me1.jpg" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yourportfolio.com" />
      <meta property="twitter:title" content="Sanket's Portfolio" />
      <meta
        property="twitter:description"
        content="Professional portfolio of Sanket Dhandhlya, Web Developer"
      />
      <meta property="twitter:image" content="./me1.jpg" />
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
