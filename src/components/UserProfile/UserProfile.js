import React, { Component } from 'react'
import { Menu, Icon, Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import Parada from './logo2.png';

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
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                    <Menu.Item disabled>
                        <img alt="text" src={Parada}/>
                    </Menu.Item>
                    <Menu.Item key="reserve">
                        <Icon type="car" />
                        Reserve Parking
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Icon type="user" />
                        My Profile
                    </Menu.Item>
                </Menu>

                <div style={{padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Username" bordered={false}>
                             {this.props.userInfo.loginUser}
                         </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Name" bordered={false}>
                            {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                        </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Mobile Number" bordered={false}>
                            {this.props.userInfo.mobileNumber}
                        </Card>
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="E-Mail Address" bordered={false}>
                            {this.props.userInfo.email}
                         </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="E-Mail Verification Status" bordered={false}>
                            {this.props.userInfo.emailVerificationStatus}
                        </Card>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export default UserProfile;
