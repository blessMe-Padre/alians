import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Homepage, Contacts, Price, About, ServicePererabotka, ServiceTransport, ServiceExpedition } from './routes/index.js';

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

  {
    path: "/service_pererabotka",
    element: (
      <App>
        <ServicePererabotka />
      </App>
    ),
  },

  {
    path: "/service_transport",
    element: (
      <App>
        <ServiceTransport />
      </App>
    ),
  },

  {
    path: "/service_expedition",
    element: (
      <App>
        <ServiceExpedition />
      </App>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
