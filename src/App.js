import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Carrito from './pages/Carrito';
import User from './pages/User';

import CajaDomi from './components/CajaDomi';
import CajaRecoge from './components/CajaRecoge';
import ConfirmaRecogida from './components/ConfirmaRecogida';
import ConfirmaDomicilio from './components/ConfirmaDomicilio';

import Layout from './components/Layout'

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/compras" component={Carrito}/>
            <Route exact path="/domicilios" component={User}/>
            <Route exact path="/domi" component={CajaDomi}/>
            <Route exact path="/recoge" component={CajaRecoge}/>
            <Route exact path="/confirmaRecoge" component={ConfirmaRecogida}/>
            <Route exact path="/confirmaDomicilio" component={ConfirmaDomicilio}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    
  );
}

 
export default App;