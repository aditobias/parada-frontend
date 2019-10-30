import React, {Component} from 'react';
import Receipt from './Receipt';
import ReservationSteps from "../Steps/ReservationSteps";
import HeaderPage from '../Header/Header';

export default class ParkingSpaceWrapper extends Component {

    render() {
        return (
            <div>
                <HeaderPage/>
                <ReservationSteps current={3} name={this.props.parkingLotName} level={this.props.parkingLevel}
                                  position={this.props.parkingPosition} price={this.props.price}
                                  receipt={this.props.receiptID}/>
                <Receipt
                    receiptInfo={this.props}
                    {...this.props}
                />
            </div>
        )
    }
}