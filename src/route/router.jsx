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
import ProductDetails from "../pages/Product Details/ProductDetails";
import Dashboard from "../layout/Dashboard";

import MyProfile from "../pages/Dashboard pages/shared/MyProfile";
import MyOrders from "../pages/Dashboard pages/shared/MyOrders";
import Review from "../pages/Dashboard pages/shared/Review";
import Wishlist from "../pages/Dashboard pages/shared/Wishlist";
import AddProduct from "../pages/Dashboard pages/Admin pages/AddProduct";





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
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_baseAPI}/products/${params.id}`)
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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashboard/my-reviews",
        element: <Review></Review>
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>
      }


    ]
  }
]);


export default router;