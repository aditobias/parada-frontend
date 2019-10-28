const parkingLotApi = "http://localhost:8080/parkingLots/";

export default {
    addNewParkingTransaction: (parkingLotName, parkingSpaceId) =>
        fetch(
            parkingLotApi + parkingLotName + "/transactions/parkingSpace/" + parkingSpaceId,
            {
                mode: 'cors',
                method: 'POST'
            })
}
