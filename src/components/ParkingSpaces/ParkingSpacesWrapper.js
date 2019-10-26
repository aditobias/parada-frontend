import React, { Component } from 'react';
import ParkingSpaces from './ParkingSpaces';

export default class ParkingSpacesWrapper extends Component {

    componentDidMount() {
        // this.props.getAllSpaces();
    }

    render() {
        return (
            <div>
                <div>
                    Parking lot : NAME
                    {/* {this.props.parkingLot.name} */}

                    <br/>
                    Parking lot capacity : CAPACITY
                    {/* {this.props.parkingLot.capacity} */}
                </div>
                <div>
                    {/* <ParkingSpaces /> */}
                    {
                        this.props.spaces.map((parkingSpace, index) =>
                            <ParkingSpaces key={index}
                                id={index}
                                parkingSpace={parkingSpace}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}