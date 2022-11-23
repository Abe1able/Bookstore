import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const CreateNewBook = (props) => {
  const { submitBookToStoreProps } = props;

  const [inputBook, setInputBook] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputBook.title.trim()) {
      submitBookToStoreProps(inputBook.title);
      setInputBook({
        title: '',
      });
    }
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className="grid-item"
          name="title"
          value={inputBook.title}
          onChange={onChange}
          required
        />
        <select className="grid-item">
          <option value="category">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" className="grid-item">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

CreateNewBook.propTypes = {
  submitBookToStoreProps: PropTypes.func.isRequired,
};

export default CreateNewBook;
