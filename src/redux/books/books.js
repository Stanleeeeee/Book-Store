const ADD_BOOK = './src/redux/books/ADD_BOOK';
const REMOVE_BOOK = './src/redux/books/REMOVE_BOOK';

const initialBook = [
  {
    id: 1,
    author: 'Daniel Banda',
    title: 'The fierce village',
    category: '',
  },
  {
    id: 2,
    author: 'Gofrey Zimba',
    title: 'Good deeds',
    category: '',
  },
  {
    id: 3,
    author: 'Mathews Zulu',
    title: 'The old village',
    category: '',
  },
];

const bookReducer = (state = initialBook, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const objBook = {
        id: state.length + 1,
        author: action.book.author,
        title: action.book.title,
      };
      return [...state, objBook];
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);

      return remove;
    }

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({
  type: REMOVE_BOOK, id,
});
export default bookReducer;
