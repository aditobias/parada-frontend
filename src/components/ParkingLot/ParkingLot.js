import React from 'react'
import 'antd/dist/antd.css'
import {Button, Typography, Row, Col, Card} from 'antd'
import {Redirect} from "react-router-dom";
import './ParkingLot.css';

const {Title} = Typography;

class ParkingLot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: false
        }
    }

    updateRedirectState = () => {
        if(this.props.parkingLot.availableSpaces !== 0){
            this.setState({
                redirectTo: true
            })
        }
    };

    render() {
        const parkingLotFromProps = this.props.parkingLot;
        console.log("parkingLotFromProps ", parkingLotFromProps);
        return (
            <div className="divStyle">
                {this.state.redirectTo ? <Redirect to={{
                    pathname: "/parkingSpaces",
                    state: {parkingLot: parkingLotFromProps}
                }}/> : false}


                        <Card onClick={this.updateRedirectState} className="parkingCards"

                              title={<span><h2 style={{margin: "0px", padding: "0px"}}>{this.props.parkingLot.parkingLotName}</h2>
                                      PHP: {this.props.parkingLot.flatRate}</span>}
                              bordered={true} hoverable={true} >

                            <p>Location: {this.props.parkingLot.location}</p>
                            <p>Capacity: {this.props.parkingLot.capacity}</p>
                            <p>Available Slots: {this.props.parkingLot.availableSpaces}</p>
                        </Card>
             
            </div>
        )
    }
}

export default ParkingLot;