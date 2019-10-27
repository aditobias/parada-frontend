import React from 'react'
import AdminAddLot from "./AdminAddLot";
import 'antd/dist/antd.css';
import AdminHeader from "./AdminHeader";
import HeaderPage from '../Header/Header';
class AdminWrapper extends React.Component {
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
        return (
            <div>
                <AdminHeader />
                <div>
                    <AdminAddLot />
                </div>
            </div>

        )
    }
}
export default AdminWrapper