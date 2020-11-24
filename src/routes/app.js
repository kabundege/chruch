import React from  'react';
import { Switch,Route,BrowserRouter,Redirect } from 'react-router-dom';
import Dash from '../components/dash';
import Login from '../components/Auth';
import Owner from '../components/owner';
import Final from '../components/Final';
import Network from '../helpers/network';
import Signup from '../components/signup';
import Add from '../components/models/add';
import Parrish from '../components/parrish';
import NotFound from '../components/Notfound';
import Subscribe from '../components/Subscribe';

const routes = () => {
  const address = window.location.pathname;
  if(address !== "/" && address !== '/signup' && address !== '/notfound' && localStorage.getItem("token") === null){
    return window.location.assign('/')
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Network/>
        <Add />
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/dash' exact component={Dash}/> 
            <Route path='/owner' exact component={Owner}/>
            <Route path='/final' exact component={Final}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path="/parrish" exact component={Parrish}/>
            <Route path="/notfound" exact component={NotFound}/>
            <Route path="/subscribe" exact component={Subscribe}/>
            <Route > 
                <Redirect to="/notfound"/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default routes;
