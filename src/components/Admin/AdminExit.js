import React from 'react'
import { Button, Card, message } from "antd";
import AdminResource from "../../api/AdminResource";

class AdminExit extends React.Component {

    state = {
        visible: false,
        transactionID: this.props.exit.id,
    };

    confirmExit = () => {

        AdminResource.updateDepartureTime(this.state.transactionID)
        .then(res => {res.json();
            if(res.status == '200')
            {
                    message.success("You have successfully updated the transaction!");

            }
            else
            {
                message.error("Failed to update the transaction!");
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
                <Card >
                    <div style={{ float: "left" }} >
                        <p>Receipt ID: {this.props.exit.id}</p>
                        <p>Parking Lot: {this.props.exit.parkingLotName}</p>
                        <p>Parking Level: {this.props.exit.parkingLevel}</p>
                        <p>Parking Position: {this.props.exit.parkingPosition}</p>
                        <p>Price: Php {this.props.exit.price}</p>
                        <p>Reservation Time: {this.convertDateTime(this.props.exit.reserveTime)}</p>
                        <p>Arrival Time: {this.convertDateTime(this.props.exit.startTime)}</p>
                        <p>Departure Time: {this.props.exit.endTime === null ? 'Not Yet Departed': this.convertDateTime(this.props.exit.endTime)}</p>
                        <p>Status: {this.props.exit.status}</p>
                    </div>
                    <div style={{ float: "right" }}>
                        <Button type="primary" style={{ height: "50px" }} onClick={this.confirmExit}>Confirm</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
export default AdminExit;