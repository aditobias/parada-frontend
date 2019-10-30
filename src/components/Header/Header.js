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
                <Menu.Item disabled={true}/>
                <Menu.Item>
                    <Link to="/"/>
                    <h2 className="parada-title">PARADA</h2>
                </Menu.Item>
                <Menu.Item key="reserve">
                    <Link to="/parkingLots"/>
                    <h4 className="parada-title "><Icon type="car"/>Reserve Parking</h4>
                </Menu.Item>
                <Menu.Item key="viewProfile">
                    <Link to="/userProfile"/>
                    <h4 className="parada-title "><Icon type="user"/>My Profile</h4>
                </Menu.Item>
                <Menu.Item key="history">
                    <Link to="/userTransactionHistory"/>
                    <h4 className="parada-title "><Icon type="unordered-list"/>Transaction History</h4>
                </Menu.Item>

                <Menu.Item disabled={true} style={{width: "35%"}}/>

                <Menu.Item key="user">
                    <h4 className="parada-title">Welcome User,  {username} </h4>
                </Menu.Item>

                <Menu.Item key="logout" onClick={this.handleOnLogOut}>
                    <Link to="/"/>
                    <h4 className="parada-title"><Icon type="logout"/>Log Out</h4>
                </Menu.Item>

            </Menu>
        )
    };

    adminHeader = (username) => {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                <Menu.Item disabled={true}/>
                <Menu.Item>
                    <Link to="/"/>
                    <h2 className="parada-title ">PARADA</h2>
                </Menu.Item>

                <SubMenu
                    title={<span className="submenu-title-wrapper"><h4 className="parada-title"><Icon type="setting"/>Administrator Features</h4></span>}>
                    <Menu.Item key="adminUser"><Link to="/adminUser"/>
                        <h4 className="parada-title "><Icon type="idcard"/>Change Admin User</h4>
                    </Menu.Item>
                    <Menu.Item key="addParking"><Link to="/adminParkingLot"/>
                        <h4 className="parada-title "><Icon type="car"/>Add Parking Lot</h4>
                    </Menu.Item>
                    <Menu.Item key="adminPayment"><Link to="/adminPayment"/>
                        <h4 className="parada-title "><Icon type="dollar"/>Confirm Payment</h4>
                    </Menu.Item>
                    <Menu.Item key="adminExit"><Link to="/adminExit"/>
                        <h4 className="parada-title "><Icon type="export"/>Confirm Driver Exit</h4>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="reserve">
                    <Link to="/parkingLots"/>
                    <h4 className="parada-title "><Icon type="car"/>Reserve Parking</h4>
                </Menu.Item>

                <Menu.Item key="viewProfile">
                    <Link to="/userProfile"/>
                    <h4 className="parada-title "><Icon type="user"/>My Profile</h4>
                </Menu.Item>

                <Menu.Item key="history">
                    <Link to="/userTransactionHistory"/>
                    <h4 className="parada-title "><Icon type="unordered-list"/>Transaction History</h4>
                </Menu.Item>

                <Menu.Item disabled={true} style={{width: "35%"}}/>

                <Menu.Item >
                    <h4 className="parada-title">Welcome Admin! {username} </h4>
                </Menu.Item>
                <Menu.Item key="logout" onClick={this.handleOnLogOut}>
                    <Link to="/"/>
                    <h4 className="parada-title"><Icon type="logout"/>Log Out</h4>
                </Menu.Item>
            </Menu>
        )
    };
};

const mapStateToProps = state => ({
    driver: state.userProfileResource
});

export default connect(mapStateToProps)(HeaderPage);