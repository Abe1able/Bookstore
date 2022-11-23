import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Books.module.css';

const BookComponent = (props) => {
  const { book, removeBookProps, id } = props;

  return (
    <li className={styles.book_section}>
      { book.bookName }
      <br />
      <br />
      <button type="button" onClick={() => removeBookProps(id)}>Remove</button>
    </li>
  );
};

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookComponent;
