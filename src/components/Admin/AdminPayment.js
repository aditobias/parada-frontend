import React from 'react'
import { Button, Card, Form, Input, Modal, Radio, message } from "antd";

const info = () => {
    message.success('Payment confirmed for Receipt ID:');
    console.log(this.props);
};

class AdminPayment extends React.Component {

    state = {
        visible: false,
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
                    </div>
                    <div style={{ float: "right" }}>
                        <Button type="primary" style={{ height: "50px" }} onClick={info}>Confirm</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
export default AdminPayment;