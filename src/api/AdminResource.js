const parkingLotApi = "http://localhost:8080/parkingLots/";

export default {
    getSpecificParkingLot: (parkingLotName) =>
        fetch(
            parkingLotApi + parkingLotName,
            {
                mode: 'cors',
                method: 'GET'
            }),

    createNewParkingLot: (parkingLot) => fetch(
        "http://localhost:8080/parkingLots", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(parkingLot)
        }),

    getSpecificTransaction: (transactionID) =>
        fetch(
            "http://localhost:8080/admin/transaction/" + transactionID,
            {
                mode: 'cors',
                method: 'GET'
            }
        ),

    updateTransaction: (transactionID) =>
        fetch(
            "http://localhost:8080/admin/transaction/" + transactionID + "/enter",
            {
                mode: 'cors',
                method: 'PATCH'
            }
        ),

    updateDepartureTime: (transactionID) =>
        fetch(
            "http://localhost:8080/admin/transaction/" + transactionID + "/exit",
            {
                mode: 'cors',
                method: 'PATCH'
            }
        ),

    updateToAdmin: (username) =>
        fetch(
            "http://localhost:8080/admin/driver/toAdmin/" + username,
            {
                mode: 'cors',
                method: 'PATCH',
            }
        ),

    updateToUser: (username) =>
        fetch(
            "http://localhost:8080/admin/driver/toUser/" + username,
            {
                mode: 'cors',
                method: 'PATCH'
            }
        )
}