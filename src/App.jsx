
import React from 'react';
import Carrito from './Pages/Carrito';
import CajaDomi from './components/CajaDomi';
import CajaRecoge from './components/CajaRecoge';
import ConfirmaRecogida from './components/ConfirmaRecogida';
import ConfirmaDomicilio from './components/ConfirmaDomicilio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // Aquí están las rutas
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={Carrito}/>
        <Route exact path="/domi" component={CajaDomi}/>
        <Route exact path="/recoge" component={CajaRecoge}/>
        <Route exact path="/confirmaRecoge" component={ConfirmaRecogida}/>
        <Route exact path="/confirmaDomicilio" component={ConfirmaDomicilio}/>
      </Switch>
    
  </BrowserRouter>
  );
}

export default App;
