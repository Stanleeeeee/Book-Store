import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [infor, setInfor] = useState({ books: '', author: '' });

  const inputData = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'title':
        setInfor({ books: e.target.value, author: infor.author });
        break;
      case 'author':
        setInfor({ books: infor.books, author: e.target.value });
        break;
      default:
        setInfor({ books: infor.books, author: infor.author });
    }
  };

  return (
    <>
      <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form action="#" method="post">
          <input type="text" name="title" placeholder="Book Title" onChange={inputData} />
          <input type="text" name="author" placeholder="Book Author" onChange={inputData} />
          <button type="button" onClick={() => dispatch(addBook(infor))}>Add Book</button>
        </form>

      </div>
    </>
  );
};

export default AddBook;
