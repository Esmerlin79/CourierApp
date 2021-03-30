import UserReducer from './UserReducer';

export const mainReducer = ( { userSesion }, action ) => {
    return{
        userSesion: UserReducer(userSesion, action)
    }
};