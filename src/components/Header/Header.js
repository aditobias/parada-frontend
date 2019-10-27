import React, { Component } from 'react'
import { Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
import Parada from './logoHeader.png';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

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
                    <SubMenu
                        title={<span className="submenu-title-wrapper"><Icon type="user"/>My Profile</span>}>
                            <Menu.Item key="viewProfile"><Link to="/userProfile"/>View Profile</Menu.Item>
                            <Menu.Item key="editProfile">Edit Profile</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="history">
                        <Icon type="unordered-list" />
                        Transaction History
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default UserProfile;
