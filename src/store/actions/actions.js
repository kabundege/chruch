import reqHandler from '../../helpers/reqeust';

export const SignUp = (payload) => {
    const action = {successStatus:201,actionName:'SignUp'}
    return reqHandler('/signup','POST',payload,action);
};

export const SignIn = (payload) => {
    const action = {successStatus:200,actionName:'SignIn'}
    return reqHandler('/signin','POST',payload,action);
};


export const Book = (payload) => {
    const action = {successStatus:201,actionName:'BookAseat'}
    return reqHandler('/books','POST',payload,action);
};


export const GetAllBooks = () => {
    const action = {successStatus:201,actionName:'GetAllBooks'}
    return reqHandler('/books','GET',undefined,action);
};
