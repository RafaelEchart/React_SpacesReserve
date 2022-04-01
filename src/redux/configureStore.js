import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { userInformation } from './task';
import spacesReducer from './spaces';

const reducers = combineReducers({ userInformation, spacesReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
