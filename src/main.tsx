import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/route.tsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./provider/theme-provider.tsx";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  </ThemeProvider>
);
