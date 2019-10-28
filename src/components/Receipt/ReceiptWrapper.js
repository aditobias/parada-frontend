import React, {Component} from 'react';
import Receipt from './Receipt';

export default class ParkingSpaceWrapper extends Component {

    render() {
        return (
            <div>
                <Receipt
                    receiptInfo={this.props}
                    {...this.props}
                />
            </div>
        )
    }
}