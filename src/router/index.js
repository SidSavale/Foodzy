import { createBrowserRouter } from 'react-router-dom'

import { Category, FoodItems } from '../pages';

export const APP_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Category />
  },
  {
    path: '/:category_name', // using param
    element: <FoodItems />
  }
]);