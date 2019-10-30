const initialState = {
    parkingLotList : [],
    // selectedParkingLot : "ParkingLot1"
    selectedParkingLot : ""
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_ALL_PARKING_LOTS':
            return {
                ...state,
                parkingLotList: payload
            };
        case 'UPDATE_SELECTED_PARKING_LOT':
            return {
                ...state,
                selectedParkingLot: payload
            };
        default:
            return state;
    }
};