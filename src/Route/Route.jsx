import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RootLayout from './../layouts/RootLayout';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
            path: '',
            element: <Home/>
        }
      ],
      errorElement: <NotFound/>
    },
  ]);

export default Route