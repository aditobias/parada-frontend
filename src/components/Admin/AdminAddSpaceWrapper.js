import React from 'react'
import 'antd/dist/antd.css';
import {Card, Input} from 'antd';
import AdminAddSpace from "./AdminAddSpace";
import AdminResource from "../../api/AdminResource";

class AdminAddSpaceWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingLot: null
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



    render(){
        const { Search } = Input;
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                <Card style={{ width: 600, justifyContent: "center" }}>
                    <Search placeholder="Input Parking Lot Here" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                    {this.state.parkingLot === null ? '' : <AdminAddSpace parkingLot={this.state.parkingLot} />}
                </Card>
            </div>
        )
    }
}

export default AdminAddSpaceWrapper;