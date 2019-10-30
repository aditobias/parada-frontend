export default {
    getAllAvailableParkingSpace: (id) =>
        fetch(
            "http://localhost:8080/parkingLots/" + id,
            {
                mode: 'cors',
                method: 'GET'
            }),

    updateParkingPosition: (parkingSpace, parkingLotName) =>
        fetch(
            "http://localhost:8080/parkingLots/" + parkingLotName + "/parkingSpace",
            {
                mode: 'cors',
                method: 'PATCH',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(parkingSpace)
            }),
}