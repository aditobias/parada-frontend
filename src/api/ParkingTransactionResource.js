const parkingLotApi = "http://localhost:8080/parkingLots/";

export default {
    addNewParkingTransaction: (parkingLotName, parkingSpaceId, parkingTransaction) =>
        fetch(
            parkingLotApi + parkingLotName + "/transactions/parkingSpace/" + parkingSpaceId,
            {
                mode: 'cors',
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(parkingTransaction)
            })
}
