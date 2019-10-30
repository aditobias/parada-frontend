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
                        <p>Receipt ID: {this.props.payment.id}</p>
                        <p>Parking Lot: {this.props.payment.parkingLotName}</p>
                        <p>Parking Level: {this.props.payment.parkingLevel}</p>
                        <p>Parking Position: {this.props.payment.parkingPosition}</p>
                        <p>Price: Php {this.props.payment.price}</p>
                        <p>Reservation Time: {this.convertDateTime(this.props.payment.reserveTime)}</p>
                        <p>Arrival Time: {this.props.payment.startTime === null ? 'Waiting for Arrival...': this.convertDateTime(this.props.payment.startTime)}</p>
                        <p>Departure Time: {this.props.payment.endTime === null ? 'Not Yet Departed': this.convertDateTime(this.props.payment.endTime)}</p>
                        <p>Status: {this.props.payment.status}</p>
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