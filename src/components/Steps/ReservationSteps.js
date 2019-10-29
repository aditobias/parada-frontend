import React, { Component } from 'react';
import {Steps, Card} from "antd";
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
                        <Step title="Choose Parking Lot" description={ this.props.name ? <h2>{this.props.name} <br/> PHP: {this.props.price} </h2> : null } />
                        <Step title="Select Parking Space" description={this.props.level ? <h2> Level: {this.props.level} Position: {this.props.position}</h2> : null}/>
                        <Step title="Confirm Reservation" description={this.props.receipt ? <h2> Receipt ID: {this.props.receipt}</h2> : null}/>
                    </Steps>
                </Card>
            </div>
        );
    }
}

export default ReservationSteps;