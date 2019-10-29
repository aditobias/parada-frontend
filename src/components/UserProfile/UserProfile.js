import React, {Component} from 'react'
import {Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from '../Header/Header';
import './user.css';

const {Meta} = Card;

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        current: 'profile',
        pic: this.props.userInfo.profilePicture
    };


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                pic: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            });
        }
    }

    render() {
        return (
            <div>
                <HeaderPage current={"viewProfile"}/>

                <div style={{textAlign: "center", margin: "auto" }}>

                <div className="center">
                    <Card title="Username" bordered={true}>
                        {this.props.userInfo.loginUser}
                    </Card>
                </div>

                <div className="center">
                    <Card title="Name" bordered={true}>
                        {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                    </Card>
                </div>

                <div className="center">
                    <Card title="Mobile Number" bordered={false}>
                        {this.props.userInfo.mobileNumber}
                    </Card>
                </div>

                <div className="center">
                    <Card title="E-Mail Address" bordered={false}>
                        {this.props.userInfo.email}
                    </Card>
                </div>

                <div className="center">
                    <Card title="E-Mail Verification Status" bordered={false}>
                        {this.props.userInfo.emailVerificationStatus}
                    </Card>
                </div>

                <div className="center">
                    <Card
                        style={{ width: 380}}
                        cover={<img alt="profile" src={this.state.pic} onError={this.onError} />}>
                        <Meta title="Profile Photo"/>
                    </Card>
                </div>
                </div>

            </div>
        )
    }
}

export default UserProfile;
