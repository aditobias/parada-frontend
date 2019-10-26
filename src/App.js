import React from 'react';
import LoginContainer from './containers/LoginContainer';
import UserContainer from './containers/UserContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
    <Switch>
          <Route exact path="/">
          <LoginContainer />
          </Route>
          <Route path="/userProfile">
          <UserContainer/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
