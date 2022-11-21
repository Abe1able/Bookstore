import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

function configureStore() {
  const rootReducer = combineReducers(
    booksReducer,
    categoriesReducer,
  );
  return rootReducer;
}

export default configureStore;
