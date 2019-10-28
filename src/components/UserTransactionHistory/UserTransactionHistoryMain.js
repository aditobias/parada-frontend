import React from 'react'
import { Table } from 'antd';
import HeaderPage from '../Header/Header';
import { Popconfirm } from 'antd';
import {connect} from "react-redux";
import UserTransactionHistoryResource from "../../api/UserTransactionHistoryResource";

class UserTransactionHistoryMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {transactionList:[], myNum:3}
    }

    componentDidMount() {
        UserTransactionHistoryResource.getUserTransactionHistory(this.props.username)
            .then(res => res.json())
            .then(userTransactionList => {
                console.log("Res transaction is", userTransactionList);
                this.setState({transactionList: userTransactionList});
                // this.props.getAllTransactionByUser(userTransactionList.content)
            })
            .catch(e => {
                console.log(e)
            })
    }

    render () {
        // return (<div/>);
        console.log("state.userTransaction.userTransactionList ", this.props.parkingTransactionList);
        const transactionList = this.props.parkingTransactionList;
        const columns = [
            {
                title: 'Parking Lot Name',
                dataIndex: 'name',
            },
            {
                title: 'Price',
                dataIndex: 'price',
            },
            {
                title: 'Date',
                dataIndex: 'date',
            },
            {
                title: 'Status',
                dataIndex: 'status',
            },
            {
                title: 'Action',
                dataIndex: 'button',
            },
        ];
        const data = [
            {
                key: '1',
                name: 'ParkingLot1 level 1 position A1',
                price: 'P'+ 50,
                date: '28 Oct 2019',
                status: 'not paid',
                button:  <Popconfirm title="Sure to delete?" >
                        <a>Cancel</a>
                    </Popconfirm>
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ];
        return (
            <div className="header">
                <HeaderPage />
                <div style={{width: "1100px", margin: "auto", paddingTop: "20px"}}>
                    <Table columns={columns} dataSource={data} size="middle" style={{background: "white"}} />
                </div>,
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
