import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../../redux/books/books';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';
import styles from './Books.module.css';

const Books = (props) => {
  const { books } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  const submitBookToStore = (title) => {
    const newBook = {
      id: uuidv4(),
      bookName: title,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className={styles.main_page}>
      <BookList books={books} removeBookProps={removeBookFromStore} />
      <CreateNewBook submitBookToStoreProps={submitBookToStore} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

Books.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Books);
