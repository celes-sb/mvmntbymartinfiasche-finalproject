import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
//import { About } from "./pages/about";
//import { Testimonios } from "./pages/testimonios";
//import { Individualizado } from "./pages/individualizado";
//import { Movimiento } from "./pages/movimiento";
//import { Acrobacia } from "./pages/acrobacia";
//import { Eventos } from "./pages/eventos";
//import { Socials } from "./pages/socials";
//import { Contact } from "./pages/contact";
import { Footer } from "./component/footer";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

/*
<Route element={<About />} path="/sobremi/" />
<Route element={<Testimonios />} path="/testimonios" />
<Route element={<Individualizado />} path="/individualizado" />
<Route element={<Movimiento />} path="/movimiento" />
<Route element={<Acrobacia />} path="/acrobacia" />
<Route element={<Eventos />} path="/eventos" />
<Route element={<Socials />} path="/redessociales" />
<Route element={<Contact />} path="/escribime" />
*/
