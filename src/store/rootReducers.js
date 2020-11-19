import { combineReducers } from 'redux';
import AuthReducer from './reducer/auth';
import BookReducer from './reducer/book';

const rootReducer = combineReducers({ 
    auth: AuthReducer,
    book: BookReducer,
});

export default rootReducer;