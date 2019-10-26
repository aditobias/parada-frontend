const initialState = {
    parkingLotList : [],
    selectedParkingLot : "parkingLot1"
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_ALL_PARKING_LOTS':
            return {
                ...state,
                parkingLotList: payload
            };
        default:
            return state;
    }
};