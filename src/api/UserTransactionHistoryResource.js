const parkingLotApi = "http://localhost:8080/drivers/";

export default {
    getUserTransactionHistory: (username) =>
        fetch(
            parkingLotApi + username + "/parking_transaction",
            {
                mode: 'cors',
                method: 'GET'
            })
}
