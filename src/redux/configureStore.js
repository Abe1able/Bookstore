import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk),
);

export default store;
