import React from 'react';
import BooksForm from './BooksForm';
import Books from './Book';

const BooksPage = () => {
  const books = [{
    title: 'stan',
    author: 'mega',
    id: 1,
  },
  {
    title: 'mega',
    author: 'zaki',
    id: 2,
  },
  {
    title: 'sharif',
    author: 'mega',
    id: 3,
  }];
  return (
    <div className="container">
      <div className="inner">
        <Books books={books} />
      </div>
      <div>
        <BooksForm />
      </div>
    </div>
  );
};

export default BooksPage;
