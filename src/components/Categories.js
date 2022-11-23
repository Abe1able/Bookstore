import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
      <p>{categories}</p>
    </>
  );
};

export default Categories;
