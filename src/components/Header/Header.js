import React, {Component} from 'react'
import {Icon, Menu} from 'antd';
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import './Header.css';
import Parada from './logoHeader.png';
import {Link} from 'react-router-dom';

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
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current || "reserve"]} mode="horizontal"
              theme="dark">
            <Menu.Item>
                <Link to="/"/>
                PARADA
                {/* <img alt="text" src={Parada}/> */}
            </Menu.Item>

            <Menu.Item key="reserve">
                <Link to="/parkingLots"/>
                <Icon type="car"/>
                Reserve Parking
            </Menu.Item>
            <SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="user"/>My Profile</span>}>
                <Menu.Item key="viewProfile"><Link to="/userProfile"/>View Profile</Menu.Item>
                <Menu.Item key="editProfile">Edit Profile</Menu.Item>
            </SubMenu>
            <Menu.Item key="history">
                <Link to="/userTransactionHistory"/>
                <Icon type="unordered-list"/>
                Transaction History
                {/*<Redirect to={{pathname: "/parkingSpaces", state: {parkingLot: parkingLotFromProps}}}/>*/}
            </Menu.Item>
        </Menu>
    );

    adminHeader = (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
            <Menu.Item>
                <Link to="/"/>
                PARADA
            </Menu.Item>

            <SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="setting" />Administrator Features</span>}>
                <Menu.Item key="adminUser"><Link to="/adminUser"/>
                    <Icon type="export"/>Change Admin User
                </Menu.Item>
                <Menu.Item key="addParking"><Link to="/adminParkingLot"/>
                    <Icon type="car"/>Add Parking Lot
                </Menu.Item>
                <Menu.Item key="addParkingSpace"><Link to="/adminSpace"/>
                    <Icon type="plus-square"/>Add Parking Lot Space
                </Menu.Item>
                <Menu.Item key="adminPayment"><Link to="/adminPayment"/>
                    <Icon type="dollar"/>Confirm Payment
                </Menu.Item>
                <Menu.Item key="adminExit"><Link to="/adminExit"/>
                    <Icon type="export"/>Confirm Driver Exit
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="reserve">
                <Link to="/parkingLots"/>
                <Icon type="car"/>
                Reserve Parking
            </Menu.Item>
            <SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="user"/>My Profile</span>}>
                <Menu.Item key="viewProfile"><Link to="/userProfile"/>View Profile</Menu.Item>
                <Menu.Item key="editProfile">Edit Profile</Menu.Item>
            </SubMenu>
            <Menu.Item key="history">
                <Link to="/userTransactionHistory"/>
                <Icon type="unordered-list"/>
                Transaction History
                {/*<Redirect to={{pathname: "/parkingSpaces", state: {parkingLot: parkingLotFromProps}}}/>*/}
            </Menu.Item>
        </Menu>
    )
}

const mapStateToProps = state => ({
    driver: state.userProfileResource
});
export default connect(mapStateToProps)(HeaderPage);