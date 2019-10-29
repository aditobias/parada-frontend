import React from 'react'
import {Button, Card, message} from "antd";
import AdminResource from "../../api/AdminResource";

class AdminUserAccess extends React.Component {


    confirmChangeToAdmin = () => {
        AdminResource.updateToAdmin(this.props.userProfile.username)
            .then(res => {res.json();
                    if(res.status == '200')
                    {
                        message.success("You have successfully made "
                            + this.props.userProfile.username
                            + " as Admin!");
                    }
                    else
                    {
                        message.error("Failed to update the transaction!");
                    }
                }
            );
    };

    confirmChangeToUser = () => {
        AdminResource.updateToUser(this.props.userProfile.username)
            .then(res => {res.json();
                    if(res.status == '200')
                    {
                        message.success("You have successfully made "
                            + this.props.userProfile.username
                            + " as Admin!");
                    }
                    else
                    {
                        message.error("Failed to update the transaction!");
                    }
                }
            );
    };

    render(){
        return (
            <Card >
                <div style={{ float: "left" }} >
                    <p>Username : {this.props.userProfile.username}</p>
                    <p>First Name: {this.props.userProfile.firstName}</p>
                    <p>Last Name: {this.props.userProfile.lastName}</p>
                    <p>Driver Type: {this.props.userProfile.driverType}</p>
                </div>
                <div style={{ float: "right"}}>
                    <div style={{verticalAlign: "top", marginBottom: "20px"}}>
                        <Button type="primary" style={{ height: "50px" }} onClick={this.confirmChangeToAdmin}>Turn To Admin</Button>
                    </div>
                    <div style={{verticalAlign: "bottom"}}>
                        <Button type="primary" style={{ height: "50px" }} onClick={this.confirmChangeToUser}>Turn To User</Button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default AdminUserAccess;