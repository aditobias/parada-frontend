import React from 'react'
import {Button, Table} from 'antd';
import HeaderPage from '../Header/Header';
import {Popconfirm, message } from 'antd';
import {connect} from "react-redux";
import UserTransactionHistoryResource from "../../api/UserTransactionHistoryResource";

class UserTransactionHistoryMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {transactionList: []}
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

    render() {
        console.log("state.userTransaction.userTransactionList ", this.state);
        const columns = [
            {title: 'Parking Lot Name', dataIndex: 'name'},
            {title: 'Price', dataIndex: 'price'},
            {title: 'Reserve Date', dataIndex: 'reserveTime'},
            {title: 'Start Date', dataIndex: 'startTime'},
            {title: 'End Date', dataIndex: 'endTime'},
            {title: 'Status', dataIndex: 'status'},
            {title: 'Action', dataIndex: 'action'},
            {title: 'Show Receipt', dataIndex: 'showReceipt'},
        ];

        const dataList = [];
        this.state.transactionList
            .map((transaction) => {
                const {
                    id, parkingLotName, parkingLevel, parkingPosition, price, reserveTime, startTime,endTime, status
                } = transaction;


                dataList.push({
                    key: id,
                    name: parkingLotName + parkingLevel + parkingPosition,
                    price: price,
                    reserveTime: this.handleConversion(reserveTime),
                    startTime: this.handleConversion(startTime),
                    endTime: this.handleConversion(endTime),
                    status: status,
                    action:  <Popconfirm title="Are you going to cancel this reservation?"
                                onConfirm={()=>this.cancelReservation(parkingLotName, id)}
                                okText={"Yes"}
                                cancelText={"No"}
                            >
                                <a href="#">Cancel</a>
                            </Popconfirm>
                        ,
                    showReceipt: <Button>Show Receipt</Button>
                })
            });

        // const dataList = [{
        //     key: '1',
        //     name: 'SAMPLE',
        //     price: 'P'+ 50,
        //     date: '28 Oct 2019',
        //     status: 'not paid',
        //     button:  <Popconfirm title="Are you going to cancel this reservation?" >
        //         <a>Cancel</a>
        //     </Popconfirm>
        // }
        // ];
        // return (<div/>);
        return (
            <div className="header">
                <HeaderPage/>
                <div style={{width: "1100px", margin: "auto", paddingTop: "20px"}}>
                    <Table columns={columns} dataSource={dataList} size="middle" style={{background: "white"}}/>
                </div>
                ,
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // parkingTransactionList: state.userTransaction.transaction,
    // parkingTransactionList: state.logInResource.transaction,
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
