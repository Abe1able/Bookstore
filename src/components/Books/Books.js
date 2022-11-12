import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';
import styles from './Books.module.css';

const Books = () => {
  const [books, addBooks] = useState();

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    addBooks([...books, newBook]);
  };

  return (
    <div className={styles.main_page}>
      <BookList />
      <CreateNewBook addBookProps={addBook} />
    </div>
  );
};
export default Books;
