import React from 'react';

import BookComponent from './BookComponent';
import styles from './Books.module.css';

const BookList = () => {
  const books = [
    {
      id: 1,
      bookName: 'Sample Book One',
    },
    {
      id: 2,
      bookName: 'Sample Book Two',
    },
    {
      id: 3,
      bookName: 'Sample Book Three',
    },
  ];

  return (
    <ul className={styles.book_section_container}>
      {books.map((book) => (
        <BookComponent key={book.id} book={book.bookName} />
      ))}
    </ul>
  );
};

export default BookList;
