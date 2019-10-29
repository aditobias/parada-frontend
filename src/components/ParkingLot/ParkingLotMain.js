import React, {Component} from 'react';
import ParkingLot from './ParkingLot';
import {connect} from "react-redux";
import ParkingLotResource from "../../api/ParkingLotResource";
import './ParkingLot.css';
import HeaderPage from '../Header/Header';
import {Steps} from "antd";
import ReservationSteps from "../Steps/ReservationSteps";
import UserResource from "../../api/UserProfileResource";

const {Step} = Steps;

class ParkingLotMain extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getMyProfile(this.props.loginUser);

        ParkingLotResource.getAllAvailableParkingLot()
            .then(res => res.json())
            .then(res => {
                console.log("Res is", res);
                // this.props.getAllParkingLots(res.parkingLot)
                this.props.getAllParkingLots(res.content)
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        console.log("state.parkingLotReducer.parkingLotList ", this.props.parkingLotAvailableList);
        const listParkingLot = this.props.parkingLotAvailableList;
        return (
            <div className="header">
                <HeaderPage current={"reserve"}/>

                <ReservationSteps current={0}/>

                <div className="parkingLot">{
                    listParkingLot.map((parkingLot, index) =>
                    <ParkingLot key={index}
                    id={index}
                    parkingLot={parkingLot}
                    />
                    )
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    parkingLotAvailableList: state.parkingLotReducer.parkingLotList,
    loginUser: state.logInResource.userName
});

const mapDispatchToProps = dispatch => ({
    getMyProfile: (userName) => {
        UserResource.getUserProfile(userName)
            .then(res => res.json())
            .then(({username, firstName, lastName, email, mobileNumber, emailVerificationStatus, profilePicture, driverType}) => {
                console.log({
                    username,
                    firstName,
                    lastName,
                    email,
                    mobileNumber,
                    emailVerificationStatus,
                    profilePicture,
                    driverType
                });

                dispatch({
                    type: 'GET_PROFILE',
                    payload: {
                        username,
                        firstName,
                        lastName,
                        email,
                        mobileNumber,
                        emailVerificationStatus,
                        profilePicture,
                        driverType
                    }
                })
            })
    },
    getAllParkingLots: parkingLots => dispatch({
        type: 'GET_ALL_PARKING_LOTS',
        payload: parkingLots
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotMain);