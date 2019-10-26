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
        // case 'UPDATE_SELECTED_PARKING_LOT':
        //     return {
        //         state,
        //         parkingSpaceList: payload
        //     };
        default:
            return state;
    }
};