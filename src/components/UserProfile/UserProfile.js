import React, {Component} from 'react'
import {Row, Col, Card, Input, Icon, Button, message} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from '../Header/Header';
import {connect} from "react-redux";
import './user.css';
import UserProfileResource from "../../api/UserProfileResource";
import ImageUploader from 'react-images-upload';

const {Meta} = Card;

class UserProfile extends Component {
    constructor(props) {
        super(props)

    }



    state = {
        current: 'profile',
        pic: this.props.userInfo.profilePicture,
        profileValue: "",
        disabled: true,
        lastName: this.props.userInfo.lastName,
        firstName: this.props.userInfo.firstName,
        email: this.props.userInfo.email,
        mobileNumber: this.props.userInfo.mobileNumber,
        userAction: "view"
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    handleChangeMobileNumber = (event) => {

        this.setState({mobileNumber:  event.target.value.replace(/\D/, '')});
    };

    handleChangeFirstName = (event) => {
        this.setState({firstName: event.target.value});
    };

    handleChangeLastName = (event) => {
        this.setState({lastName: event.target.value});
    };

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                pic: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            });
        }
    };

    editProfile = () => {
        this.setState({
            disabled: false,
            userAction: "edit"
        });
    };

    saveProfile = () => {
        this.props.editProfileDetail(this.props.userInfo.loginUser, this.state);
        this.setState({
            disabled: true,
            userAction: "view",
        });

        message.success("Update Profile completed!");
        console.log("tessssssssssssssst", this.props.editProfileDetail(this.props.userInfo.loginUser, this.state))
    };

    cancelProfile = () => {
        this.setState({
            disabled: true,
            lastName: this.props.userInfo.lastName,
            firstName: this.props.userInfo.firstName,
            mobileNumber: this.props.userInfo.mobileNumber,
            userAction: "view",
        });
        message.info("Profile editing cancelled");
    }

    renderBtn = () => {
        const buttonsWhenViewing =
            <div>
                <Button id={"editBtn"} style={{float: "right"}} onClick={this.editProfile}>
                    Edit Profile
                </Button>
            </div>;

        const buttonsWhenEditing =
            <div>
                <Button id={"cancelBtn"} style={{float: "right"}} onClick={this.cancelProfile}>
                    Cancel
                </Button>
                <Button id={"saveBtn"} style={{float: "right"}} onClick={this.saveProfile}>
                    Save
                </Button>
            </div>;

        if (this.state.userAction === "view") {
            return buttonsWhenViewing;
        } else {
            return buttonsWhenEditing;
        }
    };


    render() {


        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }



        const emailStatus = this.props.userInfo.verified ?
            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"
                  style={{fontSize: "30px", float: "left"}}/> :
            <Icon type="close-circle"
                  style={{fontSize: "30px", float: "left"}}/>;
        return (


            <div>
                <HeaderPage current="viewProfile"/>
                <div className="center" style={{width: "900px", background: "white", marginTop: "20px"}}>
                    <Row>
                        <Col span={10} style={{marginRight: "50px"}}>
                            <Card
                                style={{width: "380px", marginTop: "30px"}}
                                cover={<img alt="profile" src={this.state.pic} onError={this.onError}/>}>
                                <button>Upload</button>

                            </Card>
                        </Col>
                        <Col span={12} style={{fontcolor: "black"}}>
                            <Card bordered={true}>
                                <p style={{textAlign: "left"}}>Username</p>
                                <Input value={this.props.userInfo.loginUser} disabled/>
                                <p style={{textAlign: "left"}}>First Name</p>
                                <Input value={this.state.firstName}
                                       onChange={this.handleChangeFirstName}
                                       disabled={(this.state.disabled) ? "disabled" : ""}/>
                                <p style={{textAlign: "left"}}>Last Name</p>
                                <Input value={this.state.lastName}
                                       onChange={this.handleChangeLastName}
                                       disabled={(this.state.disabled) ? "disabled" : ""}/>
                                <p style={{textAlign: "left"}}>Mobile Number</p>
                                <Input value={this.state.mobileNumber}
                                       onChange={this.handleChangeMobileNumber}
                                       disabled={(this.state.disabled) ? "disabled" : ""}/>
                                <p style={{textAlign: "left"}}>Email Address</p>
                                <Input value={this.state.email}
                                       onChange={this.handleChangeEmail}
                                       disabled/>
                                <p style={{textAlign: "left"}}>Email Verification status</p>

                                {emailStatus}

                                <br/>

                                {this.renderBtn()}
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.logInResource.userName
});

const mapDispatchToProps = dispatch => ({
    editProfileDetail: (username, profileEdit) => {
        UserProfileResource.editUserProfile(username, profileEdit)
            .then(res=>{
                this.setState({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    mobileNumber: this.state.mobileNumber,
                    verified: this.state.verified
                })
            })
            .catch(e=>console.log(e));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
