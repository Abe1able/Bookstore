import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Books.module.css';

const BookComponent = (props) => {
  const { book } = props;

  return (
    <li className={styles.book_section}>
      { book }
      <br />
      <br />
      <button type="button">Remove</button>
    </li>
  );
};

BookComponent.propTypes = {
  book: PropTypes.string.isRequired,
};

export default BookComponent;
