import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import ShowAllProducts from "./components/Home/ShowAllProducts.jsx";
import ProductDetails from "./components/Product Details/ProductDetails.jsx";
import Dashbord from "./components/dashbord/Dashbord.jsx";
import Error from "./components/Error/Error.jsx";
import Statistics from "./components/statistics/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

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
      {
        path: "/product",
        element: <ProductDetails />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
