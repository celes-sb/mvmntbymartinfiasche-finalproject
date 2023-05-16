//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Popper.js
import "@popperjs/core";

// import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min";

//render your react application
ReactDOM.createRoot(document.querySelector("#app")).render(<Layout />);
