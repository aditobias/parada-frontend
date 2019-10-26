import React from 'react';
import Login from './components/Login/Login';
import LoginContainer from './containers/LoginContainer';
import ParkingLotMain from './components/ParkingLot/ParkingLotMain';

function App() {
  return (
    <div>
      <LoginContainer/>
      <ParkingLotMain/>
    </div>
  );
}

export default App;
