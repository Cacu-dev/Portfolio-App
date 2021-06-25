import React from "react";
import Portfolio from "../components/portfolio/js/Portfolio";
import About from "../components/about/js/About";
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
          <Route path="/About">
            <About />
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
