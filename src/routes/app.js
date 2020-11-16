import React from  'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import Auth from '../components/Auth'

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route exact path='/' component={Auth}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
