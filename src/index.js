
import './index.css';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use lazy to import components
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Bounties = lazy(() => import('./components/Bounties/Bounties'));
const Products = lazy(() => import('./components/Products/Products'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Dashboard />
          </Suspense>
        )
      },
      {
        path: "bounties",
        element: (
          <Suspense fallback={<div>Loading Bounties...</div>}>
            <Bounties />
          </Suspense>
        )
      },
      {
        path: "market",
        element: (
          <Suspense fallback={<div>Loading Products...</div>}>
            <Products />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
