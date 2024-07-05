import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Category from "../page/Category/Category";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";
import Offer from "../page/Offer/Offer";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminHome from "../page/Profile/AdminHome/AdminHome";
import UserHome from "../page/Profile/UserHome/UserHome";
import AddProduct from "../components/AddProduct/AddProduct";
import AdminProducts from "../page/Profile/AdminProducts/AdminProducts";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import ProductDetails from "../page/Details/ProductDetails";
import Cart from "../page/Profile/Cart/Cart";
import AllUsers from "../page/Profile/AllUsers/AllUsers";
import AddLocation from "../page/Profile/Location/AddLocation";
import Location from "../page/Profile/Location/Location";
import UpdateLocation from "../page/Profile/Location/updateLocation";
import ManageOrder from "../page/Profile/ManageOrder/ManageOrder";
// import Product from "../page/ProductSearch/Product";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://online-gift-shop-server.vercel.app/product')
      },
      {
        path: "/category",
        element: <Category></Category>
      },
      {
        path: "/offer",
        element: <Offer></Offer>
      },
      // {
      //   path:"/product",
      //   element: <Product></Product>
      // },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: '/details/:_id',
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: () => fetch(`https://online-gift-shop-server.vercel.app/product`)
      }

    ]
  },

  {
    path: 'profile',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // Normal User Route
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path:'location',
        element: <AddLocation></AddLocation>
      },
      {
        path:'mylocation',
        element: <Location></Location>
      },
      {
        path: 'updateLocation/:id',
        element: <UpdateLocation></UpdateLocation>,
        loader: ({ params }) => fetch(`https://online-gift-shop-server.vercel.app/location/${params.id}`)
      },

      // Admin Route
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addProduct',
        element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
      },
      {
        path: 'adminProducts',
        element: <AdminRoute><AdminProducts></AdminProducts></AdminRoute>
      },
      {
        path: 'manageOrder',
        element: <AdminRoute><ManageOrder></ManageOrder></AdminRoute>
      },
      {
        path: 'updateProduct/:id',
        element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
        loader: ({ params }) => fetch(`https://online-gift-shop-server.vercel.app/product/${params.id}`)
      }
    ]
  }
]);

export default router;