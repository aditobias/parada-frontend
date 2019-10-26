import { connect } from 'react-redux';
import ParkingSpaceWrapper from '../components/ParkingSpace/ParkingSpaceWrapper';
import ParkingSpaceResource from '../api/ParkingSpaceResource';

const mapStateToProps = state => ({
    spaces: state.parkingSpaceResource.parkingSpaceList
});


const mapDispatchToProps = dispatch => ({
    getAllSpaces : (parkingLot) => {
        ParkingSpaceResource.getAllAvailableParkingSpace(parkingLot)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            dispatch({
                type: "GET_ALL_PARKING_LOT_SPACES",
                payload: parkingLot.parkingSpacelist  //todo check correct object name   
            })
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingSpaceWrapper);