import React, { Component } from 'react';
import { Button } from 'antd';
import { Modal } from 'antd';
import ParkingSpaceResource from "../../api/ParkingSpaceResource";
import ParkingTransactionResource from "../../api/ParkingTransactionResource";
import {Redirect} from "react-router-dom";  
import receipt from '../../reducers/receipt';
import UserTransactionHistoryResource from "../../api/UserTransactionHistoryResource";
import UserProfileResource from "../../api/UserProfileResource";

class ParkingSpace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            errorOccupied: false,
            errorMaxReserve: false,
            redirect: false,
            transactionList: [],
            userProfile: null
        };

        UserTransactionHistoryResource.getUserTransactionHistory(this.props.username)
            .then(res => res.json())
            .then(userTransactionList => {
                this.setState({transactionList: userTransactionList});
            });
        UserProfileResource.getUserProfile(this.props.username)
            .then(res => res.json())
            .then(userProfileFromResource => {
                this.setState({userProfile: userProfileFromResource});
            });
    }

    showModal = () => {

        if(!this.props.parkingSpace.occupied){
            if(this.state.transactionList
                    .filter((transaction) => transaction.status === "Reserved").length < 5 ||
                this.state.userProfile.driverType === 'admin'){
                    this.setState({
                    visible: true,
                    });
            }
            else{
                this.setState({
                    errorMaxReserve: true
                })
            }
        }else{
            this.setState({
                errorOccupied: true
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
        this.props.generateReceipt(this.props.parkingSpace.id,this.props.parkingSpace.parkingLotName, this.props.username);
        
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            errorOccupied: false,
            errorMaxReserve: false
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
                    visible={this.state.errorOccupied}
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
                    title="Max Reservation"
                    visible={this.state.errorMaxReserve}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="cancel" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                    ]}
                >
                    <h1>You exceeded your max reservation of 5!</h1>
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
