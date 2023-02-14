import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Shop from "./components/shop/Shop";
import Login from "./components/login/Login";
import Orders from "./components/orders/Orders";
import SignUp from "./components/signUp/SignUp";
import PrivateRoute from "./routes/PrivateRoutes";
import Shipping from "./components/shipping/Shipping";
import {productsAndCartLoader} from './loader/ProductsAndCartLoader';
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:3000/products'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
