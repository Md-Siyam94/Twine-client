import {
  createBrowserRouter,

} from "react-router-dom";


import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/blog";
import Products from "../pages/Products/Products";





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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/products',
        element: <Products></Products>
      }
      
    ]
  },
]);


export default router;