import React from 'react'
import 'antd/dist/antd.css';
import {Card, Input} from 'antd';
import AdminAddSpace from "./AdminAddSpace";
import AdminResource from "../../api/AdminResource";
import HeaderPage from '../Header/Header';

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
            <div>
                <HeaderPage current='addParkingSpace'/>
                {/*<Header />*/}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "5%", marginBottom: "0%"}}>
                    <Card title="Add Parking Space"
                     style={{ width: "35%", justifyContent: "center" }}>
                        <Search placeholder="Input Parking Lot Here" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                        {this.state.parkingLot === null ? '' : <AdminAddSpace parkingLot={this.state.parkingLot} />}
                    </Card>
                </div>
            </div>
        )
    }
}

export default AdminAddSpaceWrapper;