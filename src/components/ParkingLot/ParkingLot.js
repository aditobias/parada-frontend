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
        this.setState({
            redirectTo: true
        })
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

                <Row gutter={20}>
                    <Col span={12}>
                        <Card onClick={this.updateRedirectState} className="parkingCards"
                              title={<span>{this.props.parkingLot.parkingLotName}<br/>
                                      <p>PHP: {this.props.parkingLot.flatRate}</p></span>}
                              bordered={true} hoverable={true}>
                            <p>Location: {this.props.parkingLot.location}</p>
                            <p>Capacity: {this.props.parkingLot.capacity}</p>
                            <p>Available Slots: {this.props.parkingLot.availableSpaces}</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ParkingLot;