import HttpClient from '../Services/HttpClient';

export const LoginUser = ( user, dispatch ) =>{
    return new Promise ( (resolve, eject ) => {
        HttpClient.post("/membership/login", user).then(response => {

            if(response.data.success){
                dispatch({
                    type:  "INICIAR_SESION",
                    user: {
                        fullName: response.data.responseObject.fullName,
                    },
                    authenticated: true
                });
            }
            resolve(response);
        }).catch(error => {
            resolve(error);
        });
    });
}

export const getPackages = (  ) =>{
    return new Promise ( (resolve, eject ) => {
        HttpClient.get("/packages/getPending").then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error);
        });
    });
}