export default {
    getAllAvailableParkingSpace: (id) =>
        fetch(
            "http://localhost:8080/parkingLots/" + id,
            {
                mode: 'cors',
                method: 'GET'
            })
}