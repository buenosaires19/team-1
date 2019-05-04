import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import "../node_modules/video-react/dist/video-react.css";
// pages for this product
// import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Carrer from "views/Carrer/Carrer.js"
import SocioVirtual from "views/SocioVirtual/SocioVirtual.js"
import SocioPerfil from "views/SocioVirtual/SocioPerfil.js"

import Test from "views/Test/Test.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/test" component={Test} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/socio-perfil" component={SocioPerfil} />
      <Route path="/socio-virtual" component={SocioVirtual} />
      <Route path="/carrer" component={Carrer} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
