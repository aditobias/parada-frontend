import React from 'react'
import { Button, Card, message } from "antd";
import AdminResource from "../../api/AdminResource";



class AdminPayment extends React.Component {

    
    state = {
        visible: false,
        transactionID: this.props.payment.id
    };

    confirmPayment = () => {

        AdminResource.updateTransaction(this.state.transactionID)
        .then(res => {
            res.json();
            console.log("Console this:"); console.log(+ res);
        }
        );
        message.success('Payment confirmed for Receipt ID:');
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
                        <p>Receipt ID: {this.props.payment.id}</p>
                        <p>Parking Lot: {this.props.payment.parkingLotName}</p>
                        <p>Parking Level: {this.props.payment.parkingLevel}</p>
                        <p>Parking Position: {this.props.payment.parkingPosition}</p>
                        <p>Price: Php {this.props.payment.price}</p>
                        <p>Reservation Time: {this.props.payment.reserveTime}</p>
                        <p>Payment Status: {this.props.payment.isPaid ? 'Paid' : 'Not yet paid'}</p>
                    </div>
                    <div style={{ float: "right" }}>
                    <Button type="primary" style={{ height: "50px" }} onClick={this.confirmPayment}>Confirm</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
export default AdminPayment;