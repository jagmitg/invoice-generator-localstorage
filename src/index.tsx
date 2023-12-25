import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Ensure that the element exists and is of the correct type
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
