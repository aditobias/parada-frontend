import React from 'react';
import {Card, Input, Search} from "antd";
import AdminAddSpace from "./AdminAddSpace";
import HeaderPage from "../Header/Header";
import UserProfileResource from "../../api/UserProfileResource";
import AdminResource from "../../api/AdminResource";
import AdminUserAccess from "./AdminUserAccess";
import {message } from 'antd';

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
                if(res.message === "No driver profile.")
                {
                    message.error("No receipt found!");
                }
                else if (res.message === "Request method 'GET' not supported")
                {
                    message.warning("Please input receipt info!");
                }
            })
        
    };


    render(){
        const { Search } = Input;

        return(
            <div>
                <HeaderPage current='adminUser'/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "5%", marginBottom: "0%"}}>
                    <Card title="Change Admin User"
                     style={{ width: "35%", justifyContent: "center" }}>
                    <Search placeholder="Input User Name" onSearch={value => this.handleOnClickSearch(value)} enterButton />
                    {(this.state.userProfile === null || this.state.userProfile.status === 405 || this.state.userProfile.message === "No driver profile.") ? '' : <AdminUserAccess userProfile={this.state.userProfile} />}
                </Card>
            </div>
            </div>

        )
    }
}

export default AdminUserAccessWrapper;
