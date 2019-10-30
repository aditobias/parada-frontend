import React from 'react'
import 'antd/dist/antd.css';
import {Card, Col, Input, Row} from 'antd';
import AdminResource from "../../api/AdminResource";
import HeaderPage from '../Header/Header';
import AdminPayment from './AdminPayment';
import QrReader from 'react-qr-reader'
import {message} from 'antd';

class AdminPaymentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: null,
            result: null
        }
    }

    handleOnClickSearch = (value) => {
        AdminResource.getSpecificTransaction(value)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    payment: res
                })
                if (res.message === "No transaction found!") {
                    message.error("No receipt found!");
                } else if (res.message === "No message available") {
                    message.warning("Please input receipt info!");
                }
            })
    };

    handleScan = data => {
        console.log(data);
        if (data) {
            this.setState({
                result: data
            })
            this.handleOnClickSearch(data);
        }
    }
    handleError = err => {
        console.error(err)
    }

    render() {
        const {Search} = Input;
        return (
            <div>
                <HeaderPage current='adminPayment'/>

                <Row>
                    <Col span={12}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: "5%",
                            marginBottom: "0%"
                        }}>
                            <Card title="Confirm Payment"
                                  style={{width: "80%", justifyContent: "center"}}>
                                <Search placeholder="Input Receipt ID Here"
                                        onSearch={value => this.handleOnClickSearch(value)} enterButton/>
                                {(this.state.payment === null || this.state.payment.status === 404 || this.state.payment.message === "No transaction found!") ? '' :
                                    <AdminPayment payment={this.state.payment}/>}
                            </Card>
                        </div>
                    </Col>

                    <Col span={12}>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{width: '60%', alignItems: 'center', margin: "5%"}}
                        />
                        <h2 style={{marginLeft: "5%"}}>{this.state.result === null ? '' : "QR Code Reading: " + this.state.result}</h2>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default AdminPaymentWrapper;