import React, { Component } from 'react';
import {Button} from 'antd'

class ParkingSpaces extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }



    render() {
        return (
            <div>
               <Button type="primary" style = {{height: "100px", width: "200px"}}>
                    <span><p>{this.props.parkingSpace.parkingLevel}</p></span>
                    <br/>
                    <span><p>{this.props.parkingSpace.parkingPosition}</p></span>
                    <br/>
                </Button>
            </div>
        )
    }
}

export default ParkingSpaces
