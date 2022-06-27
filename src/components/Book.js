import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BookContent = ({ title }) => (
  <ul className="book-content">

    {title.map(book => (
    <Books key={book.id} book={book} />
  ))}
  </ul>

);
BookContent.propTypes = {
  title: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      books: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default BookContent;
