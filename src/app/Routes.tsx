import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BooksList } from '../modules/books/components/books-list';
import { BookDetails } from '../modules/books/components/book-details';
import { NotFound } from './components/not-found';

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <BooksList />
    },
    {
      path: '/:id',
      element: <BookDetails />
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);

  return <RouterProvider router={router} />;
}

export { Routes };
