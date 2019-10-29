import { connect } from 'react-redux';
import ReceiptWrapper from '../components/Receipt/ReceiptWrapper';
import ReceiptResource from '../api/ReceiptResource';

const mapStateToProps = state => ({
    username: state.logInResource.userName,
    receiptID: state.receiptResource.receiptID,
    parkingLotName: state.receiptResource.parkingLotName,
    parkingLevel: state.receiptResource.parkingLevel,
    parkingPosition: state.receiptResource.parkingPosition,
    price: state.receiptResource.price,
    creationDate: state.receiptResource.creationDate
});


const mapDispatchToProps = dispatch => ({
    getReceiptInformation: (receiptInfo) => {
        ReceiptResource.getReceiptInfo(receiptInfo)
            .then(res => res.json())
            .then(({ username, firstName, lastName, email, mobileNumber, isVerified, profilePicture }) => {
                dispatch({
                    type: 'POST_TRANSACTION',
                    payload: { username, firstName, lastName, email, mobileNumber, isVerified, profilePicture }
                })
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReceiptWrapper);