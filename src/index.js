import './scss/base.scss';
import React from 'react';
import App from './routes/app';
import Thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './store/rootReducers';
import { createStore,applyMiddleware } from 'redux';

const store = createStore(rootReducer,applyMiddleware(Thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

