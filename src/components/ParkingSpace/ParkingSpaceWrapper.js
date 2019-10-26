import React, { Component } from 'react';
import ParkingSpace from './ParkingSpace';

export default class ParkingSpaceWrapper extends Component {

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
                    {/* <ParkingSpace /> */}
                    {
                        this.props.spaces.map((parkingSpace, index) =>
                            <ParkingSpace key={index}
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