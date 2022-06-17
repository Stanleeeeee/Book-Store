import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, removeBook } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <div className="container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          deleteBook={() => handleDeleteBook(book.item_id)}
        />
      ))}
      <hr className="line" />
      <AddBook />
    </div>
  );
};

export default Books;
