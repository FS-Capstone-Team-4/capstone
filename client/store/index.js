import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//IMPORT REDUCERS HERE

const rootReducer = combineReducers({
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
