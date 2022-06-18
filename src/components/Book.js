import React, { useRef } from 'react';
import { useDispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: titleRef.current.value,
      author: authorRef.current.value,
      category: 'category',
    };
    dispatch();
    titleRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <div>
      <span className="title">ADD NEW BOOK</span>
      <form onSubmit={(e) => handleSubmit(e)} className="input__book">
        <input
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Book title"
          className="panel-bg "
        />
        <input
          ref={authorRef}
          type="text"
          name="author"
          placeholder="Author"
          className="panel-bg "
        />
        <button type="submit" className="btn_blue2" value="Add book">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
