import React, {Component} from 'react'
import {Row, Col, Card, Input, Icon, Button} from 'antd';
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

    editProfile = () => {

    }



    render() {
        return (
            <div>
                <HeaderPage/>
                <div className="center" style={{width: "900px", background: "white", marginTop: "20px"}}>
                    <Row>
                        <Col span={10} style={{marginRight: "50px"}}>
                            <Card
                                style={{ width: "380px", marginTop: "30px"}}
                                cover={<img alt="profile" src={this.state.pic} onError={this.onError} />}>
                                <button>Upload</button>
                            </Card>
                        </Col>
                        <Col span={12} style={{fontcolor: "black"}}>
                            <Card bordered={true}>
                                <p style={{textAlign: "left"}}>Username</p>
                                <Input value={this.props.userInfo.loginUser} disabled></Input>
                                <p style={{textAlign: "left"}}>First Name</p>
                                <Input value={this.props.userInfo.firstName} disabled></Input>
                                <p style={{textAlign: "left"}}>Last Name</p>
                                <Input value={this.props.userInfo.lastName} disabled></Input>
                                <p style={{textAlign: "left"}}>Mobile Number</p>
                                <Input value={this.props.userInfo.mobileNumber} disabled></Input>
                                <p style={{textAlign: "left"}}>Email Address</p>
                                <Input value={this.props.userInfo.email} disabled></Input>
                                <p style={{textAlign: "left"}}>Email Verification status</p>
                                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: "30px", float: "left"}} /><br/>
                                <Button style={{float: "right"}} onClick={this.editProfile}>Edit Profile</Button>
                            </Card>
                        </Col>

                    </Row>



                </div>

                {/*<div style={{textAlign: "center", margin: "auto" }}>*/}

                {/*<div className="center">*/}
                {/*    <Card title="Username" bordered={true}>*/}
                {/*        {this.props.userInfo.loginUser}*/}
                {/*    </Card>*/}
                {/*</div>*/}

                {/*<div className="center">*/}
                {/*    <Card title="Name" bordered={true}>*/}
                {/*        {this.props.userInfo.firstName} {this.props.userInfo.lastName}*/}
                {/*    </Card>*/}
                {/*</div>*/}

                {/*<div className="center">*/}
                {/*    <Card title="Mobile Number" bordered={false}>*/}
                {/*        {this.props.userInfo.mobileNumber}*/}
                {/*    </Card>*/}
                {/*</div>*/}

                {/*<div className="center">*/}
                {/*    <Card title="E-Mail Address" bordered={false}>*/}
                {/*        {this.props.userInfo.email}*/}
                {/*    </Card>*/}
                {/*</div>*/}

                {/*<div className="center">*/}
                {/*    <Card title="E-Mail Verification Status" bordered={false}>*/}
                {/*        {this.props.userInfo.emailVerificationStatus}*/}
                {/*    </Card>*/}
                {/*</div>*/}


                {/*</div>*/}

            </div>
        )
    }
}

export default UserProfile;
