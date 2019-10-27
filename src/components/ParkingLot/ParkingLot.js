import React from 'react'
import 'antd/dist/antd.css'
import {Button, Tabs} from 'antd'
import {Redirect} from "react-router-dom";
import './ParkingLot.css';
import {TabPane} from "semantic-ui-react";

class ParkingLot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo : false
        }
    }

    updateRedirectState = () => {
      this.setState({
            redirectTo: true
        })
    };

    render(){
        const parkingLotFromProps = this.props.parkingLot;
        console.log("parkingLotFromProps ", parkingLotFromProps);
        return (
            <div>
                {this.state.redirectTo ? <Redirect to={{
                    pathname: "/parkingSpaces",
                    state : {parkingLot: parkingLotFromProps}
                }}/> : false}

                <div>
                    <Button type="primary" className="parkingLotButton" onClick={this.updateRedirectState}>
                        <span>Total Capacity: <p>{this.props.parkingLot.capacity}</p></span>
                        <br/>
                        <span>Available Space: <p>{this.props.parkingLot.availableSpaces}</p></span>
                        <br />
                        <span><p>{this.props.parkingLot.parkingLotName}</p></span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default ParkingLot;