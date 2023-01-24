const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoriesReducer = (categories = '', action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under construction';
    default: return categories;
  }
};

export const checkStatus = () => ({ 
  type: CHECK_STATUS
});

export default categoriesReducer;
