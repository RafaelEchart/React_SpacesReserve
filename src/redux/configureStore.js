import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { taskReducer } from './task';
import spacesReducer from './reducers/spaces';

const reducers = combineReducers({ taskReducer, spacesReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
