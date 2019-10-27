import React from 'react';
import LoginContainer from './containers/LoginContainer';
import UserContainer from './containers/UserContainer';
import ParkingLotMain from './components/ParkingLot/ParkingLotMain';
import ParkingSpacesContainer from './containers/ParkingSpacesContainer';
import SignUpContainer from './containers/SignUpContainer';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AdminAddSpaceWrapper from "./components/Admin/AdminAddSpaceWrapper";
import AdminAddLot from "./components/Admin/AdminAddLot";
import AdminWrapper from "./components/Admin/AdminWrapper";
import {Provider} from "react-redux";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginContainer/>
                </Route>
                <Route exact path="/Admin">
                    <AdminWrapper />
                </Route>
                <Route path="/userProfile">
                    <UserContainer/>
                </Route>
                <Route exact path="/parkingLots">
                    <ParkingLotMain/>
                </Route>
                <Route exact path= "/addParkingLot">
                    <AdminAddLot />
                </Route>
                <Route exact path="/addSpace">
                    <AdminAddSpaceWrapper />
                </Route>
                {/*<Route exact path="/parkingSpaces" component={ParkingSpacesContainer}/>*/}
                <Route exact path="/parkingSpaces" render={(props) => <ParkingSpacesContainer {...props}/>}/>
                <Route exact path="/signUp">
                    <SignUpContainer/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
