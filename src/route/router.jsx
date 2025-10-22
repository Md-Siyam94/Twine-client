import {
  createBrowserRouter,

} from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

import Products from "../pages/AllProducts/Products";
import Login from "../pages/Registration/Login"
import Signup from "../pages/Registration/Signup"
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }

    ]
  },
]);


export default router;