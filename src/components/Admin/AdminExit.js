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

    handleCancel = () => {
        this.setState({ visible: false });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

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
                        <p>Reservation Time: {this.props.exit.reserveTime}</p>
                        <p>Arival Time: {this.props.exit.startTime}</p>
                        <p>Departure Time: {this.props.exit.endTime === null ? 'Not Yet Departed': this.props.exit.endTime}</p>
                        <p>Payment Status: {this.props.exit.isPaid ? 'Paid' : 'Not Yet Paid'}</p>
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