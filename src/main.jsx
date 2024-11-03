import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import ShowAllProducts from "./components/Home/ShowAllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <ShowAllProducts />,
          },
          {
            path: "/:categoryParams",
            element: <ShowAllProducts />,
          },
        ],
      },
      // {
      //   path: "/:Computers",
      //   element: <h1>Computers</h1>,
      // },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
