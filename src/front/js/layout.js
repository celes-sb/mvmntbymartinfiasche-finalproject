import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about.jsx";
import { Testimonios } from "./pages/testimonios.jsx";
import { Individualizado } from "./pages/individualizado.jsx";
import { Movimiento } from "./pages/movimiento.jsx";
import { Acrobacia } from "./pages/acrobacia.jsx";
import { Eventos } from "./pages/eventos.jsx";
import { Socials } from "./pages/socials.jsx";
import { Contact } from "./pages/contact.jsx";
import { Footer } from "./component/footer";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup.jsx";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";

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
            <Route element={<About />} path="/sobremi/" />
            <Route element={<Testimonios />} path="/testimonios" />
            <Route element={<Individualizado />} path="/individualizado" />
            <Route element={<Movimiento />} path="/movimiento" />
            <Route element={<Acrobacia />} path="/acrobacia" />
            <Route element={<Eventos />} path="/eventos" />
            <Route element={<Socials />} path="/redessociales" />
            <Route element={<Contact />} path="/escribime" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Login />} path="/signup" />
            <Route element={<Login />} path="/login" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

/*


*/
