export default {
    createUser: (credentials) =>
        fetch(
            "http://localhost:8080/drivers",
            {
                mode: 'cors',
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(credentials)
            }),
}