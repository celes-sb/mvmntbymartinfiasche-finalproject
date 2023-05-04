//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//import Popper.js

import 'popper.js';

//import Bootstrap Javascript
import 'bootstrap/dist/js/bootstrap.bundle.min';

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
