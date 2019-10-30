import React from 'react'
import { Button, Table, Modal } from 'antd';
import HeaderPage from '../Header/Header';
import Receipt from '../Receipt/Receipt'
import { Popconfirm, message, Card, Row, Col } from 'antd';
import { connect } from "react-redux";
import 'tachyons';
import UserTransactionHistoryResource from "../../api/UserTransactionHistoryResource";
var QRCode = require('qrcode.react');

class UserTransactionHistoryMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionList: [],
            visible: false,
            selectedTransaction:
            { id: 1,
                parkingLotName: "",
                parkingLevel:"",
                parkingPosition:"",
                reserveTime:"",
                price:""
            }
        }
    }

    componentDidMount() {
        UserTransactionHistoryResource.getUserTransactionHistory(this.props.username)
            .then(res => res.json())
            .then(userTransactionList => {
                console.log("Res transaction is", userTransactionList);
                this.setState({transactionList: userTransactionList});
            })
            .catch(e => {
                console.log(e)
            })
    }

    handleConversion = (milliseconds) => {
        if(milliseconds===null){
            return "";
        }

        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const date = new Date(milliseconds);
        const minutes = `${date.getMinutes()}`.length===1? `0${date.getMinutes()}`: date.getMinutes();

        return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${minutes}`;
    };

    createCancelButton = (status, parkingLotName, id) =>{
        if(status === "Reserved"){
            return(
                <Popconfirm title="Are you going to cancel this reservation?"
                            onConfirm={()=>this.cancelReservation(parkingLotName, id)}
                            okText={"Yes"}
                            cancelText={"No"}>
                    <a href="#">Cancel</a>
                </Popconfirm>
            );
        }
        return "";
    };

    cancelReservation = (parkingLotName, id) => {
        UserTransactionHistoryResource.updateParkingPosition(parkingLotName,id)
            .then(res => res.json())
            .then(res=>{
                console.log(res); //update this.state.transactionList based on the res. Find by ID, then update
                message.success("Cancelled reservation from "+parkingLotName);

                const updatedTransactionList = this.state.transactionList
                    .map(transaction=>{
                        if(transaction.id===res.id){
                            return res;
                        }
                        else{
                            return transaction;
                        }
                    });

                this.setState({transactionList: updatedTransactionList});
            })
            .catch(e => {
                message.error("Unable to cancel reservation from "+parkingLotName);
                console.log(e)
            })
    };

    showModal = transaction => {
        this.setState({
            visible: true,
            selectedTransaction: transaction
        });
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        console.log("state.userTransaction.userTransactionList ", this.state);
        const columns = [
            { title: 'Parking Lot Name', dataIndex: 'name' },
            { title: 'Price', dataIndex: 'price' },
            { title: 'Reserve Date', dataIndex: 'reserveTime' },
            { title: 'Start Date', dataIndex: 'startTime' },
            { title: 'End Date', dataIndex: 'endTime' },
            { title: 'Status', dataIndex: 'status' },
            { title: 'Action', dataIndex: 'action' },
            { title: 'Show Receipt', dataIndex: 'showReceipt' },
        ];

        const dataList = [];
        this.state.transactionList
            .map((transaction) => {
                const {
                    id, parkingLotName, parkingLevel, parkingPosition, price, reserveTime, startTime, endTime, status
                } = transaction;


                dataList.push({
                    key: id,
                    name: parkingLotName + parkingLevel + parkingPosition,
                    price: price,
                    reserveTime: this.handleConversion(reserveTime),
                    startTime: this.handleConversion(startTime),
                    endTime: this.handleConversion(endTime),
                    status: status,
                    action:  this.createCancelButton(status, parkingLotName, id),
                    showReceipt: <Button id = {id} onClick={()=>this.showModal(transaction)}>Show Receipt</Button>
                })
            });

        return (
            <div className="header">
                <HeaderPage current="history"/>
                <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
                    <Table columns={columns} dataSource={dataList} size="middle" style={{ background: "white" }} />
                </div>
                ,
                <Modal style={{ width: "100%", margin: "auto", paddingTop: "20px" }}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    footer={null}
                       closable={false}
                       className={{display: "none"}}
                >
                        <Card title="Parada Reservation Receipt" bordered={false} style={{ width: "100%" }}>
                            <div align = "center">
                            <span>
                                <QRCode value={this.state.selectedTransaction.id.toString()} /><br />
                                <h1 style={{ margin: "0", paddingBottom: "3%" }}>Receipt ID : {this.state.selectedTransaction.id}</h1>
                                Parking Lot <h1 style={{ margin: "0", paddingBottom: "3%" }}>{this.state.selectedTransaction.parkingLotName}</h1>
                                <div style={{ paddingBottom: "3%" }}>
                                    <Row >
                                        <Col span={6}>
                                            Parking Level <h3 style={{ margin: "0", paddingBottom: "3%" }}>{this.state.selectedTransaction.parkingLevel}</h3>
                                        </Col>
                                        <Col span={6}>
                                            Parking Position <h3 style={{ margin: "0", paddingBottom: "3%" }}>{this.state.selectedTransaction.parkingPosition}</h3>
                                        </Col>
                                        <Col span={12}>
                                            Reservation Date / Time <h3 style={{ margin: "0", paddingBottom: "3%" }}>{new Date(this.state.selectedTransaction.reserveTime).toLocaleString()}</h3>
                                        </Col>
                                    </Row>
                                </div>
                                <h1 style={{ margin: "0", paddingBottom: "3%" }}>Price : Php {this.state.selectedTransaction.price}</h1>
                            </span>
                            <hr />
                                <Button onClick={this.handleOk}>Done</Button>
                            </div>
                        </Card>

                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.logInResource.userName,
});

const mapDispatchToProps = dispatch => ({
    getAllTransactionByUser: username => {
        UserTransactionHistoryResource.getUserTransactionHistory(username)
            .then(res => res.json())
            .then(({username}) => {
                dispatch({
                    type: "GET_ALL_TRANSACTION_BY_USER",
                    payload: {username}
                })
            })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactionHistoryMain);
