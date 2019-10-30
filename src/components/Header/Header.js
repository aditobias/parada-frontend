import React, {Component} from 'react'
import {Icon, Menu} from 'antd';
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import './Header.css';
import {Link} from 'react-router-dom';

const {SubMenu} = Menu;

class HeaderPage extends Component {
    state = {
        current: this.props.current,
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    handleOnLogOut = () => {
        window.location.reload();
    }

    render() {
        const username = this.props.driver.username;
        const header = this.props.driver.driverType === "admin" ? this.adminHeader(username) : this.userHeader(username);
        return (
            <div className="mainHeader">
                {header}
            </div>
        )
    }

    userHeader = (username) => {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current || "reserve"]} mode="horizontal"
                  theme="dark">
                <Menu.Item>
                    <Link to="/"/>
                    <h2 className="parada-title">PARADA</h2>
                </Menu.Item>

                <Menu.Item key="reserve">
                    <Link to="/parkingLots"/>
                    <h3 className="parada-title "><Icon type="car"/>Reserve Parking</h3>
                </Menu.Item>
                <Menu.Item key="viewProfile">
                    <Link to="/userProfile"/>
                    <h3 className="parada-title "><Icon type="user"/>My Profile</h3>
                </Menu.Item>
                <Menu.Item key="history">
                    <Link to="/userTransactionHistory"/>
                    <h3 className="parada-title "><Icon type="unordered-list"/>Transaction History</h3>
                </Menu.Item>
                <Menu.Item key="logout" onClick={this.handleOnLogOut}>
                    <Link to="/"/>
                    <h3 className="parada-title"><Icon type="logout"/>Log Out</h3>
                </Menu.Item>
                <Menu.Item key="logout">
                    <h3 className="parada-title">Welcome User! {username} </h3>
                </Menu.Item>
            </Menu>
        )
    };

    adminHeader = (username) => {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                <Menu.Item>
                    <Link to="/"/>
                    <h3 className="parada-title ">Change Admin User</h3>
                </Menu.Item>

                <SubMenu
                    title={<span className="submenu-title-wrapper"><Icon type="setting"/>Administrator Features</span>}>
                    <Menu.Item key="adminUser"><Link to="/adminUser"/>
                        <h3 className="parada-title "><Icon type="idcard"/>Change Admin User</h3>
                    </Menu.Item>
                    <Menu.Item key="addParking"><Link to="/adminParkingLot"/>
                        <h3 className="parada-title "><Icon type="car"/>Add Parking Lot</h3>
                    </Menu.Item>
                    <Menu.Item key="addParkingSpace"><Link to="/adminSpace"/>
                        <h3 className="parada-title "><Icon type="plus-square"/>Add Parking Lot Space</h3>
                    </Menu.Item>
                    <Menu.Item key="adminPayment"><Link to="/adminPayment"/>
                        <h3 className="parada-title "><Icon type="dollar"/>Confirm Payment</h3>
                    </Menu.Item>
                    <Menu.Item key="adminExit"><Link to="/adminExit"/>
                        <h3 className="parada-title "><Icon type="export"/>Confirm Driver Exit</h3>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="reserve">
                    <Link to="/parkingLots"/>
                    <h3 className="parada-title "><Icon type="car"/>Reserve Parking</h3>
                </Menu.Item>

                <Menu.Item key="viewProfile">
                    <Link to="/userProfile"/>
                    <h3 className="parada-title "><Icon type="user"/>My Profile</h3>
                </Menu.Item>

                <Menu.Item key="history">
                    <Link to="/userTransactionHistory"/>
                    <h3 className="parada-title "><Icon type="unordered-list"/>Transaction History</h3>
                </Menu.Item>
                <Menu.Item >
                    <h3 className="parada-title">Welcome Admin! {username} </h3>
                </Menu.Item>
            </Menu>
        )
    };
};

const mapStateToProps = state => ({
    driver: state.userProfileResource
});

export default connect(mapStateToProps)(HeaderPage);