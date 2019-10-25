const logInApi = "http://localhost:8080/drivers/credentials";

export default {
    getCredentials: (credentials) =>
        fetch(
            logInApi,
            {
                mode: 'cors',
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(credentials)
            }),
}