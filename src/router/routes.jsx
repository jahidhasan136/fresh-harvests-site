import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "products",
      //   element: <ProductDetails />,
      // },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://api-fresh-harvest.code-commando.com/api/v1/products/${params.id}`
          ),
      },
    ],
  },
]);
