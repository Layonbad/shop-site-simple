import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Shop from "./components/shop/Shop";
import Login from "./components/login/Login";
import Orders from "./components/orders/Orders";
import SignUp from "./components/signUp/SignUp";
import PrivateRoute from "./routes/PrivateRoutes";
import {Inventory} from "@mui/icons-material";
import Shipping from "./components/shipping/Shipping";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      // TODO add
      //element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          // TODO add
          //loader: productsAndCarLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
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
