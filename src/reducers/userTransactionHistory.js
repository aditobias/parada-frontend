const initialState = {
    transaction : [],
    username: ""
};

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case 'GET_ALL_TRANSACTION_BY_USER':
            return {
                ...state,
                transaction: payload,
                username: payload
            };
        default:
            return state;
    }
}