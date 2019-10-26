import React from 'react'
import 'antd/dist/antd.css'
import {Button} from 'antd'

class ParkingLot extends React.Component {
    render(){
        return (
            <div>
                <Button type="primary" style = {{height: "100px", width: "200px"}}>
                    <span>Capacity: <p>{this.props.parkingLot.capacity}</p></span>
                    <br/>
                    <span>Available Space: <p>{this.props.parkingLot.availableSpace}</p></span>
                </Button>
                <p>{this.props.parkingLot.parkingLotName}</p>
            </div>
        )
    }
}

export default ParkingLot;