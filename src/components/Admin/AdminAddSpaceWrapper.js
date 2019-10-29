import React from 'react'
import 'antd/dist/antd.css';
import {Card, Input} from 'antd';
import AdminAddSpace from "./AdminAddSpace";
import AdminResource from "../../api/AdminResource";
import HeaderPage from '../Header/Header';
import QrReader from 'react-qr-reader'

class AdminAddSpaceWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingLot: null,
            result: null
        }
    }

    handleOnClickSearch = (value) => {
        AdminResource.getSpecificParkingLot(value)
            .then(res => res.json())
            .then(res=>{
                this.setState({
                    parkingLot: res
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

    render(){
        const { Search } = Input;
        return (
            <div>
                <HeaderPage current='addParkingSpace'/>
                {/*<Header />*/}
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                    <Card style={{ width: 600, justifyContent: "center" }}>
                        <Search placeholder="Input Parking Lot Here" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                        {this.state.parkingLot === null ? '' : <AdminAddSpace parkingLot={this.state.parkingLot} />}
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

export default AdminAddSpaceWrapper;