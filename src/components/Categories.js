import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      {categories.length > 0 && (
        <h1>{categories}</h1>
      )}
      <button type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
