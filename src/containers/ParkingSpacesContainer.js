import { connect } from 'react-redux';
import ParkingSpacesWrapper from '../components/ParkingSpaces/ParkingSpacesWrapper';
import ParkingSpacesResource from '../api/ParkingSpacesResource';

const mapStateToProps = state => ({
    spaces: state.parkingLotSpacesResource.parkingLotSpacesList
});


const mapDispatchToProps = dispatch => ({
    getAllSpaces : (parkingLot) => {
        ParkingSpacesResource.getAllAvailableParkingSpaces(parkingLot)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            dispatch({
                type: "GET_ALL_PARKING_LOT_SPACES",
                payload: parkingLot.parkingSpaceslist  //todo check correct object name   
            })
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingSpacesWrapper);