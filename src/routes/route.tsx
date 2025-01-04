import App from "@/App";
import Counter from "@/pages/about";
import Home from "@/pages/home";
import Task from "@/pages/task";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/task",
            element:<Task/>
        },
        {
            path:"/about",
            element:<Counter/>
        }
      ]
    },
  ]);

  export default router