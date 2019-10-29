const initialState = {
    receiptID:"",
    username:"",
    parkingLotName:"",
    parkingLevel:"",
    parkingPosition:"",
    price:"",
    creationDate:""

};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_RECEIPT':
            return {
                ...state,
                receiptID: payload.id,
                username: payload.username,
                parkingLotName:payload.parkingLotName,
                parkingLevel:payload.parkingLevel,
                parkingPosition:payload.parkingPosition,
                price:payload.price,
                creationDate:payload.reserveTime
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