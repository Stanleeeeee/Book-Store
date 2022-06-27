import axios from 'axios';

const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';
const FETCH_BOOK = './books/FETCH_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZOJqFCh93ZI0Xzzf10vz/books';

const initialBook = [];

const bookReducer = (state = initialBook, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const objBook = {
        item_id: `book${Date.now()}`,
        title: action.book.book,
        author: action.book.author,
        category: action.book.category,
      };
      const newState = [`book${Date.now()}`, [{
        title: action.book.book,
        author: action.book.author,
        category: action.book.category,
      }]];

      axios.post(baseUrl, objBook);
      return [...state, newState];
    }

    case REMOVE_BOOK: {
      axios.delete(`${baseUrl}/${action.id}`);
      const remove = state.filter((book) => book[0] !== action.id);

      return remove;
    }

    case FETCH_BOOK:
      return action.newBook;

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({
  type: REMOVE_BOOK, id,
});

export const fetchBook = () => (dispatch) => {
  axios.get(baseUrl).then((response) => {
    const data = Object.entries(response.data);
    dispatch({
      type: FETCH_BOOK, newBook: data,
    });
  });
};
export default bookReducer;
