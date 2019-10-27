import React, {Component} from 'react';
import ParkingSpace from './ParkingSpace';
import './ParkingLotSpace.css';
import HeaderPage from "../Header/Header";
import {Card} from "antd";
import ReservationSteps from "../Steps/ReservationSteps";

export default class ParkingSpaceWrapper extends Component {

    componentDidMount() {
        console.log("Component did mount ", this.props);
        const parkingLotName = this.props.location.state.parkingLot.parkingLotName;
        this.props.updateSelectedParkingLot(parkingLotName);
        this.props.getAllSpaces(parkingLotName);
    }

    render() {
        return (
            <div>
                <HeaderPage/>
                <ReservationSteps current={1}/>

                <div className="divStyle">
                    <Card style={{width: "400px", margin: "auto"}}
                          title={<h1 style={{textAlign: "center"}}>{this.props.id}</h1>}>
                        <h3>Available Slots: {this.props.location.state.parkingLot.availableSpaces}</h3>
                        <h3>Price: {this.props.location.state.parkingLot.flatRate}</h3>
                    </Card>
                </div>

                <div className="main-parkingLotSpace">
                    <div className="parkingLotSpace">
                        {/* <ParkingSpace /> */} {
                        this.props.spaces.map((parkingSpace, index) =>
                            <ParkingSpace key={index}
                                          id={index}
                                          parkingSpace={parkingSpace}
                            />
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}