import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Formulario from './Formulario';
import FormularioP2 from './FormularioP2' 

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Formulario} />
      <Route path="/Form2" component={FormularioP2} />
    </Switch>
  );
};

export default Routes;