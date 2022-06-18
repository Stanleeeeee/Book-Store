import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, deleteBook }) => (
  <div className="book">
    <div className="bookDetails">
      <div>
        <small className="bookCategory">Action</small>
        <h2 className="bookTitle">{title}</h2>
        <p className="bookAuthor">{author}</p>
        <div className="actionBtn">
          <button type="button">Comments</button>
          <button type="button" onClick={deleteBook}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="readingProgress">
        <div className="oval-2">
          <div className="circle" />
        </div>
        <div>
          <p className="percentage">64%</p>
          <p className="progressCompleted">Completed</p>
        </div>
      </div>
    </div>

    <div className="progress">
      <p className="progressCompleted">CURRENT CHAPTER</p>
      <p className="currentChapter">Chapter 17</p>
      <button type="button" className="btn_blue">
        UPDATE PROGESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  deleteBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  title: '',
  author: '',
};
export default Book;
