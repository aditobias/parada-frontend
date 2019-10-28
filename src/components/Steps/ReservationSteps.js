import React, { Component } from 'react';
import {Card, Steps} from "antd";
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
                <Card className="cardSteps">
                    <Steps current={this.state.current}>
                        <Step title="Choose Parking Lot" description={<h2>{this.props.name} {this.props.location } {this.props.price}</h2>} />
                        <Step title="Select Parking Space" />
                        <Step title="Confirm Reservation"/>
                    </Steps>
                </Card>
            </div>
        );
    }
}

//this.state.slots + this.state.price

export default ReservationSteps;