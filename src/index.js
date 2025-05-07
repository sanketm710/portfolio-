import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="./me1.jpg" />
        <link rel="icon" type="image/png" sizes="192x192" href="./me1.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="./me1.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="./me1.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio Website" />
        <link rel="manifest" href="public\manifest.json" />
        <title>Sanket's Portfolio</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </html>
  </React.StrictMode>,
  document.getElementById("root")
);
