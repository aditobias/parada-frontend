import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
import Parada from './logoHeader.png';
import { Link } from 'react-router-dom';


class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        current: 'reserve',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        console.log(this.state.current);
    };

    render() {
        return (
            <div className="mainHeader">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                    <Menu.Item>
                        <Link to="/"></Link>
                        <img alt="text" src={Parada}/>
                    </Menu.Item>
                    <Menu.Item key="reserve">
                        <Link to="/parkingLots"></Link>
                        <Icon type="car" />
                        Reserve Parking
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link to="/userProfile"></Link>
                        <Icon type="user" />
                        My Profile
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default UserProfile;
