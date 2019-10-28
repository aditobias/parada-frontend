import React, { Component } from 'react';
import { Button } from 'antd';
import { Modal } from 'antd';
import ParkingSpaceResource from "../../api/ParkingSpaceResource";
import ParkingTransactionResource from "../../api/ParkingTransactionResource";
import {Redirect} from "react-router-dom";  
import receipt from '../../reducers/receipt';

class ParkingSpace extends Component {
    state = {
        visible: false,
        errorVisible: false,
        redirect: false
    };

    showModal = () => {
        if(!this.props.parkingSpace.occupied){
            this.setState({
                visible: true,
            });
        }else{
            this.setState({
                errorVisible: true
            })
        }
    };

    handleOk = e => {
        
        console.log(e);
        this.setState({
            visible: false,
            redirect : true
        });
        console.log(this.props);
        this.props.generateReceipt(this.props.parkingSpace.id,this.props.parkingSpace.parkingLotName);
        
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            errorVisible: false
        });
    };


    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        <Redirect to={{
                            pathname:"/parkingReceipt",
                            state: {parkingLot: this.props.location.state.parkingLot}
                        }}
                        />
                        : false
                }
                <Button className={this.props.parkingSpace.occupied ? 'parkingLotSpaceButtonOccupied' : 'parkingLotSpaceButton'}
                        onClick={this.showModal}>
                    <div className="parkingButtonContent">
                        {this.props.parkingSpace.parkingPosition}
                    </div>
                </Button>
                <Modal
                    title="Occupied Space"
                    visible={this.state.errorVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="cancel" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                    ]}
                >
                    <h1>This space has already been occupied!</h1>
                </Modal>
                <Modal
                    title="Reserve parking"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="cancel" onClick={this.handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="confirmReservation" type="primary" onClick={this.handleOk}>
                            Confirm Reservation
                        </Button>,
                    ]}
                >
                    <h1>Do you want to reserve {this.props.parkingSpace.parkingPosition}?</h1>
                </Modal>
            </div>
        )
    }
}

export default ParkingSpace
