export default {
    getCredentials: (credentials) =>
        fetch(
            "http://localhost:8080/drivers/credentials",
            {
                mode: 'cors',
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(credentials)
            }),
}