import React from 'react'
import 'antd/dist/antd.css'
import {Button, Card, Col, Row} from 'antd'
import {Redirect} from "react-router-dom";
import 'tachyons';
import './Receipt.css';

var QRCode = require('qrcode.react');

class Receipt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleOk = e => {

        console.log(e);
        this.setState({
            redirect: true
        });

    };

    render() {
        return (
            <div> { this.state.redirect ?<Redirect to={{
                            pathname: "/parkingSpaces",
                            state: {parkingLot: this.props.location.state.parkingLot}}}/> : null } <div> &nbsp;
                </div>

                <article class="mw6 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <Card title="Parada Reservation Receipt" bordered={false}>
                        <span>
                            <QRCode value={this.props.receiptInfo.receiptID.toString()}/><br/>
                            <h1>Receipt ID : {this.props.receiptInfo.receiptID}</h1>
                            Parking Lot <h1>{this.props.receiptInfo.parkingLotName}</h1>
                            <div style={{paddingBottom: "3%"}}>
                                <Row>
                                    <Col span={6}> Parking Level <h3>{this.props.receiptInfo.parkingLevel}</h3></Col>
                                    <Col span={6}> Parking Position <h3>{this.props.receiptInfo.parkingPosition}</h3></Col>
                                    <Col span={12}>Reservation Date / Time
                                        <h3>{new Date(this.props.receiptInfo.creationDate).toLocaleString()}</h3></Col>
                                </Row>
                            </div>
                            <h1>Price : Php {this.props.receiptInfo.price}</h1>
                        </span>
                        <hr/>
                        <Button type="primary" htmlType="submit" onClick={this.handleOk}>Confirm</Button>
                    </Card>
                </article>
            </div>
        )
    }
}

export default Receipt;