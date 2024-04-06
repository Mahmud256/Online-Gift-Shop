import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Category from "../page/Category/Category";
import Home from "../page/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
    //   errorElement:
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/category",
            element:<Category></Category>
        }
      ]
    },
  ]);

export default router;