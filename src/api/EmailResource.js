const logInApi = "http://localhost:8080/sendEmail/driver/";

export default {
    sendEmailVerification: (username) =>
        fetch(
            logInApi + username,
            {
                mode: 'cors',
                method: 'PATCH'
            }),
}