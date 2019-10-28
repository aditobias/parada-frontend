import React, { Component } from 'react'
import {Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from '../Header/Header';

const { Meta } = Card;

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        current: 'profile',
    };
    

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <HeaderPage/>

                <div style={{textAlign: "center", margin: "auto" }}>

                    <Col span={6} style={{padding: '20px', textAlign: "center", margin: "auto" }}>
                        <Card
                            style={{ width: 320 }}
                            cover={<img alt="profile" src={this.props.userInfo.profilePicture} />}>
                            <Meta title="Profile Photo"/>
                        </Card>
                    </Col>

                    <Row gutter={30} className="flex">
                        <Col span={8} className="center">
                            <Card title="Username" bordered={false}>
                             {this.props.userInfo.loginUser}
                         </Card>
                        </Col>
                        <Col span={8} className="center">
                            <Card title="Name" bordered={false}>
                            {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                        </Card>
                        </Col>
                        <Col span={8} className="center">
                            <Card title="Mobile Number" bordered={false}>
                            {this.props.userInfo.mobileNumber}
                        </Card>
                        </Col>
                    </Row>
                </div>

                <Row gutter={30} className="flex" >
                    <Col span={12}>
                        <Card title="E-Mail Address" bordered={false}>
                            {this.props.userInfo.email}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="E-Mail Verification Status" bordered={false}>
                            {this.props.userInfo.emailVerificationStatus}
                        </Card>
                    </Col>
                </Row>



            </div>
        )
    }
}

export default UserProfile;
