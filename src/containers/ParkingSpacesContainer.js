import { connect } from 'react-redux';
import ParkingSpaceWrapper from '../components/ParkingSpace/ParkingSpaceWrapper';
import ParkingSpaceResource from '../api/ParkingSpaceResource';
import ParkingTransactionResource from '../api/ParkingTransactionResource';

const mapStateToProps = state => ({
    id: state.parkingLotReducer.selectedParkingLot,
    spaces: state.parkingSpaceResource.parkingSpaceList,
    username: state.logInResource.userName
});


const mapDispatchToProps = dispatch => ({
    getAllSpaces: (id) => {
        ParkingSpaceResource.getAllAvailableParkingSpace(id)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                dispatch({
                    type: "GET_ALL_PARKING_LOT_SPACES",
                    payload: res.parkingSpaceList  //todo check correct object name
                })
            })
    },
    updateSelectedParkingLot: (parkingLotName) => {
        // ParkingSpaceResource.updateSelectedParkingLot(parkingLotName)
        //     .then(res => res.json())
        //     .then(res => {
                dispatch({
                    type: "UPDATE_SELECTED_PARKING_LOT",
                    payload: parkingLotName
                })
            // })
    },

    getReceipt: (id,parkingLotName,username) =>{
        ParkingSpaceResource.updateParkingPosition(
            {id: id},
            parkingLotName);
        ParkingTransactionResource.addNewParkingTransaction(parkingLotName,
            id, {username: username})
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch({
                    type: "GET_RECEIPT",
                    payload: res  //todo check correct object name
                })
            });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingSpaceWrapper);