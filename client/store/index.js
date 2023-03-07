import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//IMPORT REDUCERS HERE

const rootReducer = combineReducers({
  //IMPORTED REDUCERS GO HERE
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
