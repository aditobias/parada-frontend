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
        })
}