import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>NOT FOUND: 404</h1>,
    children: [
      {
        path: ":showOption",
        element: <App />
      }
    ]
  },
  {
    path: "NotFound",
    element: <h1>404 - NOT FOUND</h1>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
