import React from 'react'
import 'antd/dist/antd.css';
import {Card, Input, Row, Col} from 'antd';
import AdminResource from "../../api/AdminResource";
import HeaderPage from '../Header/Header';
import AdminExit from './AdminExit';
import QrReader from "react-qr-reader";

class AdminExitWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exit: null,
            result: null
        }
    }

    handleOnClickSearch = (value) => {
        AdminResource.getSpecificTransaction(value)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    exit: res
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
        const {Search} = Input;
        return (
            <div>
                <HeaderPage current='adminExit'/>
                <Row>
                    <Col span={12}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: "5%",
                            marginBottom: "0%"
                        }}>
                            <Card title="Confirm Exit"
                                  style={{width: "80%", justifyContent: "center"}}>
                                <Search placeholder="Input Receipt ID Here"
                                        onSearch={value => this.handleOnClickSearch(value)} enterButton/>
                                {this.state.exit === null ? '' : <AdminExit exit={this.state.exit}/>}
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

export default AdminExitWrapper;