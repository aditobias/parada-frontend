import React, { Component } from 'react'
import { Menu, Icon, Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
import Parada from './logoHeader.png';


class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        current: 'profile',
    };


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="mainHeader">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                    <Menu.Item disabled>
                        <img alt="text" src={Parada}/>
                    </Menu.Item>
                    <Menu.Item key="reserve">
                        <Icon type="car" />
                        Reserve Parking
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Icon type="user" />
                        My Profile
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default UserProfile;
