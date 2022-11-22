import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StarWarsContextProvider } from "./context/starWars.context";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn1A3Bmbw5Y_rQYOn2r0pU8BjNTojABQI",
  authDomain: "star-wars-8ca7c.firebaseapp.com",
  projectId: "star-wars-8ca7c",
  storageBucket: "star-wars-8ca7c.appspot.com",
  messagingSenderId: "213320733178",
  appId: "1:213320733178:web:96d5f129f0ad968b2f5443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StarWarsContextProvider>
    <App />
  </StarWarsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
