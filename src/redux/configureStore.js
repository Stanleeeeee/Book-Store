import { configureStore, combineReducers } from 'redux';
import bookReducer from './src/redux/books/books';
import checkStatusReducer from './src/redux/categories/category';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = configureStore(reducer);

export default store;
