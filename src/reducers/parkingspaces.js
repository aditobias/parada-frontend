const initialState = {
    parkingSpaceList: [
        {
            "id": "1",
            "parkingLotName": "MOA",
            "parkingLevel": "level1",
            "parkingPosition": "testPos1",
            "isOccupied": "true"
        },
        {
            "id": "2",
            "parkingLotName": "MOA",
            "parkingLevel": "level1",
            "parkingPosition": "testPos2",
            "isOccupied": "true"
        },
        {
            "id": "3",
            "parkingLotName": "MOA",
            "parkingLevel": "level1",
            "parkingPosition": "testPos3",
            "isOccupied": "true"
        }
    ]
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