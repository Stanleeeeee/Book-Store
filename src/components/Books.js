import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const {
    book: {
      title,
      author,
      id,
      category,
    },

  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <li key={id} className="books-content">
        {title}
        {' by '}
        {author}
        {' - '}
        {category}
      </li>
      <button type="button" id={id} onClick={handleRemove}>
        Remove
      </button>
    </>
  );
};

Books.propTypes = {
  title: PropTypes.shape({
    id: PropTypes.number.isRequired,
    books: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default Books;
