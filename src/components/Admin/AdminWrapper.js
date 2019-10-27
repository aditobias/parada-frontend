import React from 'react'
// import AdminAddSpaceWrapper from "./AdminAddSpaceWrapper";
import AdminAddLot from "./AdminAddLot";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button, Icon, Menu} from "antd";

class AdminWrapper extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render(){
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="car" theme="twoTone" />
                    Add Parking Lot
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />
                    Add Parking Lot Space
                </Menu.Item>
            </Menu>
        )
    }
}
export default AdminWrapper