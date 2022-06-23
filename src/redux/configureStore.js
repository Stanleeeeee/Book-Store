import { createSlice, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = createSlice(reducer);

export default store;
