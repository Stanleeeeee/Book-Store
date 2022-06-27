import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [input, setInputs] = useState({ title: '', author: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();
    dispatch(addBook({title: setInputs.title, author: setInputs.author }));
    input.title = '';
    input.author = '';
  };

  return (
    <>
      <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form action="#" method="post">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            onChange={handleChange}
      />
          <input
            type="text"
            name="author"
            placeholder="Book Author"
            onChange={handleChange} 
          />
          <button type="button" onClick={handleSubmit}>
            Add Book
          </button>
        </form>

      </div>
    </>
  );
};

export default AddBook;
