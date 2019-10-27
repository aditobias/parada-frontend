import React from 'react';
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";

class AdminHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        current: 'addParking',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render(){
       return(
           <div>
               <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                    <Menu.Item key="addParking">
                        <Link to="/addParkingLot" />
                        <Icon type="car" theme="twoTone" />
                        Add Parking Lot
                    </Menu.Item>
                    <Menu.Item key="addParkingSpace">
                        <Link to="/addSpace"/>
                        <Icon type="plus-square" />
                        Add Parking Lot Space
                    </Menu.Item>
                </Menu>
           </div>
       )
   }

}

export default AdminHeader