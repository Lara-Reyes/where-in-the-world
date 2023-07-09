import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./HomePage";
import CountryDetails from "./components/CountryDetails";
import "tailwindcss/tailwind.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
    {
      path: "/countries/:name",
      element: <CountryDetails/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
