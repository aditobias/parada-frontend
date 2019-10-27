import React from 'react'
import {Button, Card, Input, Modal} from "antd";
import AdminResource from "../../api/AdminResource";
import {Redirect} from "react-router-dom";


class AdminAddLot extends React.Component {
    state = {
        pName: '',
        pLoc: '',
        pFRate: 0,
        pCap: 0,
        pMax: 0,
        visible: false,
        redirect: false
    };

    handlePName = (event) => {
        this.setState({ pName: event.target.value});
    };

    handlePLoc = (event) => {
        this.setState({ pLoc: event.target.value});
    };

    handlePFRate = (event) => {
        this.setState({ pFRate: event.target.value});
    };

    handlePCap = (event) => {
        this.setState({ pCap: event.target.value});
    };
    handlePMax = (event) => {
        this.setState({ pMax: event.target.value});
    };

    handleClickEvent = () => {
        AdminResource.createNewParkingLot({
            parkingLotName : this.state.pName,
            location : this.state.pLoc,
            flatRate : this.state.pFRate,
            capacity : this.state.pCap,
            maxSpacePerLevel: this.state.pMax
        });
        this.showModal();
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
            redirect : true,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){

        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                {this.state.redirect ? <Redirect to="/" /> : null}
                <Card style={{width: 600, justifyContent: "center"}}>
                    <div style={{paddingBottom: "10px"}}>
                        <p> Parking Lot Name: </p>
                        <Input placeholder="Enter Parking Lot Name" value={this.state.pName}
                               onChange={this.handlePName}/>
                    </div>
                    <div style={{paddingBottom: "10px"}}>
                        <p> Parking Lot Location: </p>
                        <Input placeholder="Enter Parking Lot Location" value={this.state.pLoc}
                               onChange={this.handlePLoc}/>
                    </div>
                    <div style={{paddingBottom: "10px"}}>
                        <p> Parking Lot Flat Rate: </p>
                        <Input placeholder="Enter Parking Lot Flat Rate" value={this.state.pFRate}
                               onChange={this.handlePFRate}/>
                    </div>
                    <div style={{paddingBottom: "10px"}}>
                        <p> Parking Lot Capacity: </p>
                        <Input placeholder="Enter Parking Lot Capacity" value={this.state.pCap}
                               onChange={this.handlePCap}/>
                    </div>
                    <div style={{paddingBottom: "10px"}}>
                        <p> Parking Lot Max Per Level: </p>
                        <Input placeholder="Enter Parking Lot Max Per Level" value={this.state.pMax}
                               onChange={this.handlePMax}/>
                    </div>
                    <div style={{float: "right"}}>
                        <Button type="primary" style={{height: "50px"}} onClick={this.handleClickEvent}>Add</Button>
                    </div>
                </Card>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p><h1>Parking Lot {this.state.pName} has been added!</h1></p>
                </Modal>
            </div>
        );
    }

}

export default AdminAddLot;