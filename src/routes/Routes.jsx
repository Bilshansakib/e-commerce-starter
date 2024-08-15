import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProductPage from "../components/ProductPage";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        
        {
            path:'/',
            element: <Login></Login>

        },
        {
            path:'/register',
            element: <Register></Register>

        },
        {
            path:'/products',
            element: <ProductPage/>

        },
      ]
    },
  ]);