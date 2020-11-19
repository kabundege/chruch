const initState = {
    Booking:null,
    BookError:""
}

const BookReducer = (state = initState,Action) => {
    const { type,action } = Action;
    switch(type){
        case'BookAseat_Error':
            return state = {
                ...state,
                BookError:action,
                Booking:null,
            }
        case 'BookAseat_Success':
            localStorage.removeItem("token")
            return state = {
                ...state,
                BookError:null,
                Booking:action,
            }
        default:
            return state
    }
}

export default BookReducer;