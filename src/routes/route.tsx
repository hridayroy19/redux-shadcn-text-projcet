import App from "@/App";
import About from "@/pages/about";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/about",
            element:<About/>
        }
      ]
    },
  ]);

  export default router