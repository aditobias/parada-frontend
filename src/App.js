import React from 'react';
import LoginContainer from './containers/LoginContainer';
import UserContainer from './containers/UserContainer';
import ParkingLotMain from './components/ParkingLot/ParkingLotMain';
import ParkingSpacesContainer from './containers/ParkingSpacesContainer';
import SignUpContainer from './containers/SignUpContainer';

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
                        <LoginContainer/>
                    </Route>
                    <Route path="/userProfile">
                        <UserContainer/>
                    </Route>
                    <Route exact path="/parkingLots">
                        <ParkingLotMain/>
                    </Route>
                    {/*<Route exact path="/parkingSpaces" component={ParkingSpacesContainer}/>*/}
                    <Route exact path="/parkingSpaces" render={(props) => <ParkingSpacesContainer {...props}/>}/>
                    <Route exact path="/signUp">
                        <SignUpContainer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
