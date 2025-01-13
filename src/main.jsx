import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from './routes/HomePage.jsx';
import About from './routes/About.jsx';
import Price from './routes/Price.jsx';
import Contacts from './routes/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Homepage />
      </App>
    ),
  },
  {
    path: "/about",
    element: (
      <App>
        <About />
      </App>
    ),
  },
  {
    path: "/price",
    element: (
      <App>
        <Price />
      </App>
    ),
  },
  {
    path: "/contacts",
    element: (
      <App>
        <Contacts />
      </App>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
