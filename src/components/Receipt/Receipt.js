import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography, Row, Col, Card } from 'antd'
import { Redirect } from "react-router-dom";
import 'tachyons';
var QRCode = require('qrcode.react');


class Receipt extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            redirect: false
        }
    }
    handleOk = e => {

        console.log(e);
        this.setState({
            redirect : true
        });

    };

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        <Redirect to={{
                            pathname: "/parkingSpaces",
                            state: {parkingLot: this.props.location.state.parkingLot}
                        }}
                        /> :
                        null
                }
                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>
                <article class="mw6 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <Card title="Reservation Receipt" bordered={false} style={{ width: 500 }}>
                    <Row>
                    <div align = "right">
                    <Col span={8}>
                    <h1>Receipt ID :</h1>
                        Username :
                        <br/>
                        <br/>
                        Parking Lot :
                        <br/>
                        <br/>
                        Parking Level :
                        <br/>
                        <br/>
                        Parking Position :
                        <br/>
                        <br/>
                        <h2>Price :</h2>
                    </Col>
                    </div>
                    <div align = "left">
                    <Col span={16}>
                    <h1>{this.props.receiptInfo.receiptID}</h1>
                    {this.props.receiptInfo.username}
                    <br/>
                    <br/>
                    {this.props.receiptInfo.parkingLotName}
                    <br/>
                    <br/>
                    {this.props.receiptInfo.parkingLevel}
                    <br/>
                    <br/>
                    {this.props.receiptInfo.parkingPosition}
                    <br/>
                    <br/>
                    <h2>PHP {this.props.receiptInfo.price}</h2>
                    </Col>
                    </div>
                    </Row>
                    </Card>
                    <hr></hr>
                    <QRCode value={this.props.receiptInfo.receiptID.toString()}/>
                    <div align="right">
                    <Button type="primary" htmlType="submit" onClick={this.handleOk}>
                    Confirm
                    </Button>
                    </div>
                </article>
            </div>
        )
    }
}

export default Receipt;