export default {
    getCredentials: (credentials) => fetch(
        "itamnl16-w10:8080/credentials",
        {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                "username" : credentials.username,
                "password" : credentials.password
              })
        }
    ),
}