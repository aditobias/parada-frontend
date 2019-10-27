import React, { Component } from 'react';
import {Steps} from "antd";
import '../ParkingLot/ParkingLot.css';
const {Step} = Steps;

class ReservationSteps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current
        }
    }

    render() {
        return (
            <div className="steps">
                <Steps current={this.state.current}>
                    <Step title="Choose Parking Lot"/>
                    <Step title="Select Parking Space"/>
                    <Step title="Confirm Reservation"/>
                </Steps>
            </div>
        );
    }
}

export default ReservationSteps;