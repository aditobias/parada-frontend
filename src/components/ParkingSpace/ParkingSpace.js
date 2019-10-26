import React, { Component } from 'react';
import { Button } from 'antd';
import { Modal } from 'antd';

class ParkingSpace extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });

    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        const description = (
            <div>
                <span><p>{this.props.parkingSpace.parkingPosition}</p></span>
                <br />
                {/* <span><p>{this.props.parkingSpace}</p></span>
                <br /> */}
            </div>
        );
        return (
            <div>
                <Button type="primary" className="parkingLotSpaceButton" onClick={this.showModal}>
                    {description}
                </Button>
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
                    {description}
                </Modal>
            </div>
        )
    }
}

export default ParkingSpace
