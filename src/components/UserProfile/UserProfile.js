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

                <div style={{width: "80%", margin: "auto" }}>

                    <Row>
                        <Col span={8}/>
                        <Col span={8}>
                            <div style={{ margin: "auto" , width: "80%"}}>
                                <Card
                                    style={{ margin: "5%"}}
                                    cover={<img alt="profile" src={this.state.pic} onError={this.onError} />}>
                                    <Meta title="Profile Photo"/>
                                </Card>
                            </div>
                        </Col>
                    </Row>

                    <Row >
                        <Col span={8}>
                            <Card title="Username" bordered={true} style={{margin: "5%" }}>
                                {this.props.userInfo.loginUser}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Name" bordered={true} style={{margin: "5%" }}>
                                {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Driver type" bordered={false}  style={{margin: "5%" }}>
                                {this.props.userInfo.driverType}
                            </Card>

                        </Col>
                    </Row>

                    <Row >
                        <Col span={8}>
                            <Card title="E-Mail Address" bordered={false} style={{margin: "5%" }}>
                                {this.props.userInfo.email}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="E-Mail Verification Status" bordered={false} style={{margin: "5%" }}>
                                {this.props.userInfo.emailVerificationStatus}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Mobile Number" bordered={false} style={{margin: "5%" }}>
                                {this.props.userInfo.mobileNumber}
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export default UserProfile;
