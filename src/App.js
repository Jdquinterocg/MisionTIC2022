import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Carrito from './pages/Carrito';
import User from './pages/User';

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
          </Switch>
        </Layout>
      </BrowserRouter>
    
  );
}

 
export default App;