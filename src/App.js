import React from 'react';
import LoginContainer from './containers/LoginContainer';
import UserContainer from './containers/UserContainer';
import ParkingLotMain from './components/ParkingLot/ParkingLotMain';
import ParkingSpacesContainer from './containers/ParkingSpacesContainer';
import SignUpContainer from './containers/SignUpContainer';
import ReceiptContainer from './containers/ReceiptContainer';
import UserTransactionHistoryMain from './components/UserTransactionHistory/UserTransactionHistoryMain';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AdminAddSpaceWrapper from "./components/Admin/AdminAddSpaceWrapper";
import AdminAddLot from "./components/Admin/AdminAddLot";
import AdminWrapper from "./components/Admin/AdminWrapper";
import AdminPaymentWrapper from './components/Admin/AdminPaymentWrapper';
import AdminExitWrapper from './components/Admin/AdminExitWrapper';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginContainer/>
                </Route>
                <Route exact path="/admin">
                    <AdminWrapper />
                </Route>
                <Route path="/userProfile">
                    <UserContainer/>
                </Route>
                <Route exact path="/parkingLots">
                    <ParkingLotMain/>
                </Route>
                <Route exact path="/userTransactionHistory">
                    <UserTransactionHistoryMain/>
                </Route>
                <Route exact path= "/adminParkingLot">
                    <AdminAddLot />
                </Route>
                <Route exact path="/adminSpace">
                    <AdminAddSpaceWrapper />
                </Route>
                <Route exact path="/adminExit">
                    <AdminExitWrapper />
                </Route>
                <Route exact path="/adminPayment">
                    <AdminPaymentWrapper/>
                </Route>

                {/*<Route exact path="/parkingSpaces" component={ParkingSpacesContainer}/>*/}
                <Route exact path="/parkingSpaces" render={(props) => <ParkingSpacesContainer {...props}/>}/>

                <Route exact path="/parkingReceipt" render={(props) => <ReceiptContainer {...props}/>}/>

                <Route exact path="/signUp">
                    <SignUpContainer/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
