import React from  'react';
import { Switch,Route,BrowserRouter,Redirect } from 'react-router-dom';
import Login from '../components/Auth';
import Owner from '../components/owner';
import Final from '../components/Final';
import Signup from '../components/signup';
import Parrish from '../components/parrish';
import NotFound from '../components/Notfound';
import Subscribe from '../components/Subscribe';

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route path="/parrish" exact component={Parrish}/>
            <Route path='/' exact component={Login}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/owner' exact component={Owner}/>
            <Route path="/subscribe" exact component={Subscribe}/>
            <Route path='/final' exact component={Final}/>
            <Route path="/notfound" exact component={NotFound}/>
            <Route > 
                <Redirect to="/notfound"/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
