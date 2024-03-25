import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement:
      children:[
        // {
        //     path:
        //     element:
        // }
      ]
    },
  ]);

export default router;