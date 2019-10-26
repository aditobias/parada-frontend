import React from 'react';
import Login from './components/Login/Login';
import LoginContainer from './containers/LoginContainer';
import UserContainer from './containers/UserContainer';


function App() {
  return (
    <div>
      <LoginContainer />
      <UserContainer/>
    </div>
  );
}

export default App;
