import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from '../auth/privateroute'
import Login from '../Login/Login'
import Principal from '../MainPage/Index'
import CrearCuenta from "../MainPage/CrearCuenta";

export default function AppRouter()
{
    return(
            <Router>
                <Switch>
                    <Route exact path={["/","/login"]} component={Login}/>
                    <PrivateRoute exact path="/Principal" component= {Principal} />                    
                    <PrivateRoute exact path="/RegistrarCuenta" component= {CrearCuenta} />
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>
                </Switch>                
            </Router>
    );
}