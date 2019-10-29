const parkingLotApi = "http://localhost:8080/";

export default {
    getUserTransactionHistory: (username) =>
        fetch(
            parkingLotApi + "drivers/" + username + "/parking_transaction",
            {
                mode: 'cors',
                method: 'GET'
            }),
    updateParkingPosition: (parkingLotName, transactionId) =>
        fetch(
            `${parkingLotApi}/parkingLots/${parkingLotName}/transactions/${transactionId}/cancel`,
            {
                mode: 'cors',
                method: 'PATCH',
            }),
    // headers: new Headers({'Content-Type': 'application/json'}),
    // // body: JSON.stringify(parkingLotName)
}
