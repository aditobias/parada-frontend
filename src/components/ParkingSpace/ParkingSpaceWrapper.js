import React, {Component} from 'react';
import ParkingSpace from './ParkingSpace';
import './ParkingLotSpace.css';
import HeaderPage from "../Header/Header";
import {Card} from "antd";


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
                <Card style={{width: "1100px", margin: "auto"}}>
                    {/*{console.log("PROPS ", this.props)}*/}
                    {/*{console.log("props.location.state", this.props.location.state)}*/}
                    <p style={{
                        textAlign: "center",
                        fontSize: "50px",
                        fontWeight: "fontWeightBold",
                        fontFamily: "Monospace"
                    }}> {this.props.id}</p>
                    {/*Parking lot : {this.props.id}*/}

                    <br/>
                    Parking lot capacity :
                    {this.props.location.state.parkingLot.capacity}

                </Card>
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