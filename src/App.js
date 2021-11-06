
import './App.css';

import React from 'react';
import Signup from './Signup';
import Login from './Login';
import NoLoginHome from './NoLoginHome';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
function App() {
  return (
    <div className="App">
      
        <Router>
          <Switch>
            <Route exact path='/inbox'>
            <div className='app__body'>
              <Homepage />
            </div>
            </Route>
            <Route exact path='/'>
              <NoLoginHome />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            
          </Switch>
        </Router>
         
    
    </div>
  );
}

export default App;
