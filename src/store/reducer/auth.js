const initState = {
    userInfo:null,
    authError:"",
    signupError:"",
    loading:false,
    Network_Error:false,
}

const authReducer = (state = initState,Action) => {
    const { type,action } = Action;
    switch(type){
        case'Loading':
            return state = {
                ...state,
                loading:true,
                userCreated:false,
                Network_Error:false
            }
        case'Stop_Loading':
            return state = {
                ...state,
                loading:false
            }
        case'Network_Error':
            return state = {
                ...state,
                loading:false,
                Network_Error:true
            }
        case 'SignIn_Error':
            return state = {
                ...state,
                authError: action,
            }
        case 'SignIn_Success':
            localStorage.setItem("token",action.token)
            return state = {
                userInfo: {...action},
                authError:null,
            }

        case 'SignUp_Error':
            return state = {
                ...state,
                signupError: action,
            }
        case 'SignUp_Success':
            localStorage.setItem("token",action.token)
            return state = {
                userInfo: {...action},
                signupError:null,
            }
        case 'Logout':
            localStorage.removeItem("token")
            return state = {
                userInfo:{
                    role:null,
                    token:null,
                    origin_id:null,
                    origin_type:null,
                },
                authError:null,
                loading:false,
            }
        default:
            return state
    }
}

export default authReducer;