import React from 'react'
import {Button, Card, message} from "antd";
import AdminResource from "../../api/AdminResource";

class AdminExit extends React.Component {

    state = {
        visible: false,
        transactionID: this.props.exit.id
    };

    confirmExit = (transactionID) => {

        AdminResource.updateDepartureTime(transactionID)
            .then(res => {
                    res.json();
                    if (res.status == '200') {
                        message.success("You have successfully confirmed the exit of :" + transactionID);
                    } else {
                        message.error("Failed to confirm exit!");
                    }
                }
            );

    };

    convertDateTime = dateTime => {
        return new Date(dateTime).toLocaleString();
    }

    render() {
        return (
            <div>
                <Card>
                    <div style={{float: "left"}}>
                        <h2>Receipt ID: {this.props.exit.id}</h2>
                        <h2>Parking Lot: {this.props.exit.parkingLotName}</h2>
                        <h2>Parking Level: {this.props.exit.parkingLevel}</h2>
                        <h2>Parking Position: {this.props.exit.parkingPosition}</h2>
                        <h2>Price: Php {this.props.exit.price}</h2>
                        <h2>Reservation Time: {this.convertDateTime(this.props.exit.reserveTime)}</h2>
                        <h2>Arrival Time: {this.convertDateTime(this.props.exit.startTime)}</h2>
                        <h2>Departure
                            Time: {this.props.exit.endTime === null ? 'Not Yet Departed' : this.convertDateTime(this.props.exit.endTime)}</h2>
                        <h2>Status: {this.props.exit.status}</h2>
                    </div>
                    <div style={{float: "right"}}>
                        <Button type="primary" style={{height: "50px"}}
                                onClick={() => this.confirmExit(this.props.exit.id)}>Confirm</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default AdminExit;