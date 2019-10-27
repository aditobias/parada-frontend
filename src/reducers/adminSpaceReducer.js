const initialState = {
    parkingLot: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_SPACE':
            return {
                ...state,
                parkingLot: payload
            };
        default:
            return state;
    }
};
