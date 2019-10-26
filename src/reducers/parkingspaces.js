const initialState = {
    parkingSpaceList: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_ALL_PARKING_LOT_SPACES':
            return {
                ...state,
                parkingSpaceList: payload
            };
        default:
            return state;
    }
};