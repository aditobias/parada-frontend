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
    )

}