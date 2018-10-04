// dependencies
import React from "react";
import ReactDOM from "react-dom";
// import { NativeRouter } from 'react-router-native'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
// ****************************************************************
// ****************************************************************
// components on the app
import App from "./App";
import MusicContent from "./pages/MusicContent/MusicContent";
import Catalogues from "./pages/Catalogue/Catalogues";
import CatalogueContent from "./pages/Catalogue/CatalogueContent";
import Logo from "./mdbootstrap/img/logo.png";
// ****************************************************************
// ****************************************************************
// assets
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./mdbootstrap/css/mdb.css";
import "./mdbootstrap/css/style.css";
import "./mdbootstrap/css/font-awesome.min.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route
        exact={true}
        path={"/catalogues"}
        component={Catalogues}
        Logo={Logo}
      />
      <Route
        exact={true}
        path={"/catalogueContent/:category"}
        component={CatalogueContent}
        Logo={Logo}
      />
      <Route path={"/musicContent/:id"} component={MusicContent} Logo={Logo} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
