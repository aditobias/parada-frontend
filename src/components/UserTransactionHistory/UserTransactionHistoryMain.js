import React from 'react'
import {Table} from 'antd';
import HeaderPage from '../Header/Header';
import {Popconfirm} from 'antd';
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

    render() {
        console.log("state.userTransaction.userTransactionList ", this.state);
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
                title: 'Creation Date',
                dataIndex: 'creationDate',
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

        const dataList = [];
        this.state.transactionList
            .map((transaction) => {
                const {
                    id, parkingLotName, parkingLevel, parkingPosition, price, creationDateTime, voided
                } = transaction;

                dataList.push({
                    key: id,
                    name: parkingLotName + parkingLevel + parkingPosition,
                    price: price,
                    creationDate: creationDateTime,
                    status: voided,
                    button:  <Popconfirm title="Are you going to cancel this reservation?" >
                                 <a>Cancel</a>
                             </Popconfirm>
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
