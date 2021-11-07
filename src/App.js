import './App.css';
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import NoLoginHome from './NoLoginHome';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
function App() {
  return (
    <div className="App">
          <Switch>
          <Route exact path='/' component={NoLoginHome} /> 
          <Route  path='/signup' component={Signup} />
          <Route  path='/login' component={Login} /> 
          <Route  path='/inbox' component={Homepage} />
          </Switch>
    </div>
  );
}

export default App;
