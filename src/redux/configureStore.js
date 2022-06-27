import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';
import checkStatusReducer from './categories/category';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
