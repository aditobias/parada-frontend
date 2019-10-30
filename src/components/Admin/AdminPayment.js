import React from 'react'
import { Button, Card, message } from "antd";
import AdminResource from "../../api/AdminResource";

class AdminPayment extends React.Component {

    state = {
        visible: false
    };

    confirmPayment = (transactionID) => {

        AdminResource.updateTransaction(transactionID)
            .then(res => {
                res.json();
                if (res.status == '200') {
                    message.success('Payment confirmed for Receipt ID:' + transactionID);
                } else {
                    message.error("Failed to confirm payment!");
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
                        <h2>Receipt ID: {this.props.payment.id}</h2>
                        <h2>Parking Lot: {this.props.payment.parkingLotName}</h2>
                        <h2>Parking Level: {this.props.payment.parkingLevel}</h2>
                        <h2>Parking Position: {this.props.payment.parkingPosition}</h2>
                        <h2>Price: Php {this.props.payment.price}</h2>
                        <h2>Reservation Time: {this.convertDateTime(this.props.payment.reserveTime)}</h2>
                        <h2>Arrival Time: {this.props.payment.startTime === null ? 'Waiting for Arrival...': this.convertDateTime(this.props.payment.startTime)}</h2>
                        <h2>Departure Time: {this.props.payment.endTime === null ? 'Not Yet Departed': this.convertDateTime(this.props.payment.endTime)}</h2>
                        <h2>Status: {this.props.payment.status}</h2>
                    </div>
                    <div style={{ float: "right" }}>
                        <Button type="primary" style={{ height: "50px" }} onClick={() => this.confirmPayment(this.props.payment.id)}>Confirm</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
export default AdminPayment;