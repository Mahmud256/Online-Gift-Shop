import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Category from "../page/Category/Category";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";
import Offer from "../page/Offer/Offer";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category",
        element: <Category></Category>
      },
      {
        path: "/offer",
        element: <Offer></Offer>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      }
    ]
  },
]);

export default router;