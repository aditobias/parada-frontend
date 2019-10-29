import React from 'react';
import {Card, Input, Search} from "antd";
import AdminAddSpace from "./AdminAddSpace";
import HeaderPage from "../Header/Header";
import UserProfileResource from "../../api/UserProfileResource";
import AdminResource from "../../api/AdminResource";
import AdminUserAccess from "./AdminUserAccess";

class AdminUserAccessWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: null
        }
    }

    handleOnClickSearch = (value) => {
        UserProfileResource.getUserProfile(value)
            .then(res => res.json())
            .then(res=>{
                this.setState({
                    userProfile: res
                })
            })
    };


    render(){
        const { Search } = Input;

        return(
            <div>
                <HeaderPage current='adminUser'/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <Card style={{justifyContent: "center", flexDirection: "center", width: "600px"}}>
                    <Search placeholder="Input User Name" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                    {this.state.userProfile === null ? '' : <AdminUserAccess userProfile={this.state.userProfile} />}
                </Card>
            </div>
            </div>

        )
    }
}

export default AdminUserAccessWrapper;