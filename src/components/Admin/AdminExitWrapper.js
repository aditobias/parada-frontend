import React from 'react'
import 'antd/dist/antd.css';
import {Card, Input} from 'antd';
import AdminResource from "../../api/AdminResource";
import AdminHeader from "./AdminHeader";
import HeaderPage from '../Header/Header';
import AdminExit from './AdminExit';


class AdminExitWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exit: null
        }
    }

    handleOnClickSearch = (value) => {
        AdminResource.getSpecificTransaction(value)
            .then(res => res.json())
            .then(res=>{
                this.setState({
                    exit: res
                })
            })
    };

    render(){
        const { Search } = Input;
        return (
            <div>
                <HeaderPage/>
                <AdminHeader current='adminExit'/>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                    <Card style={{ width: 600, justifyContent: "center" }}>
                        <Search placeholder="Input Receipt ID Here" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                        {this.state.exit === null ? '' : <AdminExit exit={this.state.exit} />}
                    </Card>
                </div>
            </div>
        )
    }
}

export default AdminExitWrapper;