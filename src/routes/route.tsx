import App from "@/App";
import Counter from "@/pages/about";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/about",
            element:<Counter/>
        }
      ]
    },
  ]);

  export default router