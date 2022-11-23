const CHECK_STATUS = 'bookstore/categories/CHECKSTATUS';

export default function categoriesReducer(state = { categories: [] }, action = {}) {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under construction';
    default: return state;
  }
}

export function checkStatus(categories) {
  return { type: CHECK_STATUS, categories };
}
