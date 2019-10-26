const parkingLotApi = "http://localhost:8080/parkingLots" ;

export default {
    getAllAvailableParkingLot: () =>
        fetch(
            parkingLotApi,
            {
                mode: 'cors',
                method: 'GET'
            })
}