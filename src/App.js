import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Carrito from "./pages/Carrito";
import User from "./pages/User";
import CajaDomi from "./components/carrito/CajaDomi";
import CajaRecoge from "./components/carrito/CajaRecoge";
import ConfirmaRecogida from "./components/carrito/ConfirmaRecogida";
import ConfirmaDomicilio from "./components/carrito/ConfirmaDomicilio";
import Aseo from "./components/catalogo/Aseo";
import Lacteos from "./components/catalogo/Lacteos";
import Fruver from "./components/catalogo/Fruver";
import Varios from "./components/catalogo/Varios";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/compras" component={Carrito} />
          <Route exact path="/domicilios" component={User} />
          <Route exact path="/domi" component={CajaDomi} />
          <Route exact path="/recoge" component={CajaRecoge} />
          <Route exact path="/confirmaRecoge" component={ConfirmaRecogida} />
          <Route exact path="/confirmaDomicilio" component={ConfirmaDomicilio}/>
          <Route exact path="/aseo" component={Aseo} />
          <Route exact path="/lacteos" component={Lacteos} />
          <Route exact path="/fruver" component={Fruver} />
          <Route exact path="/varios" component={Varios} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
