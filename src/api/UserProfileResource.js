const userProfileApi = "http://localhost:8080/drivers/";

export default {
    getUserProfile: (profile) =>
        fetch(
            userProfileApi + profile,
            {
                mode: 'cors',
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
}