import React, {Component} from 'react'
import {Menu, Icon} from 'antd';
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import './Header.css';
import Parada from './logoHeader.png';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';

const {SubMenu} = Menu;

class HeaderPage extends Component {
    state = {
        // current: 'reserve',
        current: this.props.current,
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render() {
        const header = this.props.driver.driverType === "admin" ? this.adminHeader : this.userHeader;
        return (
            <div className="mainHeader">
                {header}
            </div>
        )
    }

    userHeader = (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current || "reserve"]} mode="horizontal" theme="dark">
            <Menu.Item>
                <Link to="/"></Link>
                <img alt="text" src={Parada}/>
            </Menu.Item>

            <Menu.Item key="reserve">
                <Link to="/parkingLots"></Link>
                <Icon type="car"/>
                Reserve Parking
            </Menu.Item>
            <SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="user"/>My Profile</span>}>
                <Menu.Item key="viewProfile"><Link to="/userProfile"/>View Profile</Menu.Item>
                <Menu.Item key="editProfile">Edit Profile</Menu.Item>
            </SubMenu>
            <Menu.Item key="history">
                <Icon type="unordered-list"/>
                Transaction History
            </Menu.Item>
        </Menu>
    );

    adminHeader = (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
            <Menu.Item>
                <Link to="/"></Link>
                <img alt="text" src={Parada}/>
            </Menu.Item>

            <Menu.Item key="addParking">
                <Link to="/adminParkingLot"/>
                <Icon type="car" theme="twoTone"/>
                Add Parking Lot
            </Menu.Item>
            <Menu.Item key="addParkingSpace">
                <Link to="/adminSpace"/>
                <Icon type="plus-square"/>
                Add Parking Lot Space
            </Menu.Item>


            <Menu.Item key="reserve">
                <Link to="/parkingLots"></Link>
                <Icon type="car"/>
                Reserve Parking
            </Menu.Item>
            <SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="user"/>My Profile</span>}>
                <Menu.Item key="viewProfile"><Link to="/userProfile"/>View Profile</Menu.Item>
                <Menu.Item key="editProfile">Edit Profile</Menu.Item>
            </SubMenu>
            <Menu.Item key="history">
                <Icon type="unordered-list"/>
                Transaction History
            </Menu.Item>
        </Menu>
    )
}

const mapStateToProps = state=>({
    driver: state.userProfileResource
});
export default connect(mapStateToProps)(HeaderPage);