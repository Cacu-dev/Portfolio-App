import React from "react";
import Portfolio from "../components/portfolio/js/Portfolio";
import SobreMi from "../components/about/js/SobreMi";
import NavBar from "../components/navbar/js/NavBar";
import InicioContainer from "../components/inicio/inicioContainer/js/InicioContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/SobreMi">
            <SobreMi />
          </Route>
          <Route path="/">
            <InicioContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default RouterApp;
