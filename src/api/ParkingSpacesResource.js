export default {
    getAllAvailableParkingSpaces: (parkingLot) =>
        fetch(
            "http://localhost:8080/parkingspaces/" + parkingLot.id,
            {
                mode: 'cors',
                method: 'GET'
            })
}