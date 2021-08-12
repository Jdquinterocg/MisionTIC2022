import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";

import store from "./store";
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
import PrivateRoute from "./components/private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/domicilios" component={User} />
            <Route exact path="/domi" component={CajaDomi} />
            <Route exact path="/recoge" component={CajaRecoge} />
            <Route exact path="/confirmaRecoge" component={ConfirmaRecogida} />
            <Route exact path="/confirmaDomicilio" component={ConfirmaDomicilio} />
            <Route exact path="/aseo" component={Aseo} />
            <Route exact path="/lacteos" component={Lacteos} />
            <Route exact path="/fruver" component={Fruver} />
            <Route exact path="/varios" component={Varios} />

            <PrivateRoute exact path="/compras" component={Carrito} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
