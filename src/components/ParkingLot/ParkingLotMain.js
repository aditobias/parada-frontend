import React, {Component} from 'react';
import ParkingLot from './ParkingLot';
import {connect} from "react-redux";
import ParkingLotResource from "../../api/ParkingLotResource";
import './ParkingLot.css';
import HeaderPage from '../Header/Header';

class ParkingLotMain extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
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
            <div>
                <HeaderPage />
                <div className="parkingLot">{
                    listParkingLot.map((parkingLot, index) =>
                        <ParkingLot key={index}
                                    id={index}
                                    parkingLot={parkingLot}
                        />
                    )
                }
                </div>
                <div className="pagination">
                    <a href="#">❮</a>
                    <a href="#">❯</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    parkingLotAvailableList: state.parkingLotReducer.parkingLotList
});

const mapDispatchToProps = dispatch => ({
    getAllParkingLots: parkingLots => dispatch({
        type: 'GET_ALL_PARKING_LOTS',
        payload: parkingLots
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotMain);