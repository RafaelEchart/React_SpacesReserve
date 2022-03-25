import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './task';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
