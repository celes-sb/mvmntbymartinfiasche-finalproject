import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navigate } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { Sidebar } from "./component/sidebar"
import { Home } from "./pages/home";
import { About } from "./pages/about.jsx";
import { Testimonios } from "./pages/testimonios.jsx";
import { Individualizado } from "./pages/individualizado.jsx";
import { Movimiento } from "./pages/movimiento.jsx";
import { Acrobacia } from "./pages/acrobacia.jsx";
import { Eventos } from "./pages/eventos.jsx";
import { Contact } from "./pages/contact.jsx";
import { Footer } from "./component/footer";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup.jsx";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { Backoffice } from "./pages/backoffice.jsx";
import { Programs } from "./pages/programs.jsx";
import { AddPrograms } from "./pages/addPrograms.jsx";
import { Diagnostico } from "./pages/diagnostico.jsx";
import { Orders } from "./pages/orders.jsx";
import { Nutrition } from "./pages/nutrition.jsx";
import { Papers } from "./pages/papers.jsx";
import { Profile } from "./pages/profile.jsx";
import { EditProfile } from "./pages/editProfile.jsx";
import { Settings } from "./pages/settings.jsx";
import { Measures } from "./pages/measures.jsx";
import { EmergencyContact } from "./pages/emergencyContact.jsx";
import { PaymentMethod } from "./pages/paymentMethod.jsx";
import { Twofa } from "./pages/twofa.jsx";
import { Preferences } from "./pages/preferences.jsx";
import { UserLayout } from "./pages/userLayout";
import { RecoverPassword } from "./pages/recoverpassword.jsx"
import { NewPassword } from "./pages/newpassword.jsx"

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
            <Route element={<Contact />} path="/escribime" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<RecoverPassword />} path="/recoverpassword" />
            <Route element={<NewPassword />} path="/new_password/:token"/>
            <Route element={<UserLayout><Backoffice /></UserLayout>} path="/user/backoffice" />
            <Route element={<UserLayout><Diagnostico /></UserLayout>} path="/user/diagnostico" />
            <Route element={<UserLayout><Programs /></UserLayout>} path="/user/programs" />
            <Route element={<UserLayout><Orders /></UserLayout>} path="/user/orders" />
            <Route element={<UserLayout><Nutrition /></UserLayout>} path="/user/nutrition" />
            <Route element={<UserLayout><Papers /></UserLayout>} path="/user/papers" />
            <Route element={<UserLayout><Profile /></UserLayout>} path="/user/profile" />
            <Route element={<UserLayout><Settings /></UserLayout>} path="/user/settings" />
            <Route element={<UserLayout><Measures /></UserLayout>} path="/user/measures" />
            <Route element={<UserLayout><EmergencyContact /></UserLayout>} path="/user/emergency-contact" />
            <Route element={<UserLayout><PaymentMethod /></UserLayout>} path="/user/payment-method" />
            <Route element={<UserLayout><Twofa /></UserLayout>} path="/user/twofa" />
            <Route element={<UserLayout><Preferences /></UserLayout>} path="/user/preferences" />
            <Route element={<UserLayout><EditProfile /></UserLayout>} path="/user/edit-profile" />
            <Route element={<UserLayout><AddPrograms /></UserLayout>} path="/admin/add-programs" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
