import React from 'react';

const CreateNewBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className="grid-item"
        />
        <select className="grid-item">
          <option value="category">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="button" className="grid-item">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default CreateNewBook;
