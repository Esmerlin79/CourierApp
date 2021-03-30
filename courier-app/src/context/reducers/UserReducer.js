export const initialState = {
    user: {
        fullName: ''
    },
    authenticated: false
}

const UserReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "INICIAR_SESION": 
            return{
                ...state,
                user: action.user,
                authenticated: action.authenticated
            }
        case "SALIR_SESION": 
            return{
                ...state,
                user: null,
                authenticated: false
            }
    
        default:
            return state;
    }
}
export default UserReducer;