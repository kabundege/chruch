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
        case'GetAllBooks_Error':
            return state = {
                ...state,
                BookError:action,
                Booking:null,
            }
        case'GetAllBooks_Success':
            return state = {
                ...state,
                BookError:"",
                Booking:action,
            }
        case 'BookAseat_Success':
            localStorage.clear()
            return state = {
                ...state,
                BookError:"",
                Booking:action,
            }
        case'clear':
            return state = {
                ...state,
                BookError:"",
                Booking:null
            }
        default:
            return state
    }
}

export default BookReducer;