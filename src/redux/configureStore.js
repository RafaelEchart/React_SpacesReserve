import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { taskReducer } from './task';

const reducers = combineReducers({ taskReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
