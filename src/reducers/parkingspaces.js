const initialState = {
    parkingLotSpacesList : []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_ALL_PARKING_LOT_SPACES':
            return {
                ...state,
                parkingLotSpacesList: payload
            };
        default:
            return state;
    }
};