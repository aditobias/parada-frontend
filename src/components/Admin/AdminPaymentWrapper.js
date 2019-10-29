import React from 'react'
import 'antd/dist/antd.css';
import { Card, Input } from 'antd';
import AdminResource from "../../api/AdminResource";
import HeaderPage from '../Header/Header';
import AdminPayment from './AdminPayment';
import QrReader from 'react-qr-reader'

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
        const { Search } = Input;
        return (
            <div>
                <HeaderPage current='adminPayment'/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "5%", marginBottom: "0%"}}>
                    <Card title="Payment"
                     style={{ width: "35%", justifyContent: "center" }}>
                        <Search placeholder="Input Receipt ID Here" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                        {this.state.payment === null ? '' : <AdminPayment payment={this.state.payment} />}
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>{this.state.result === null ? '' : "QR Code Reading: " + this.state.result }</h2>
                </div>

                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '30%', margin: "auto"}}
                />
                </div>

        )
    }
}

export default AdminPaymentWrapper;