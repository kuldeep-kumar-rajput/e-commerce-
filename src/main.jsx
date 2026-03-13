import { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import About from "./page/About.jsx";
import Product from "./page/Product.jsx";
import Cart from "./page/Cart.jsx";
import Home from "./page/Home.jsx";

const Contact = lazy(() => import("./page/Contact.jsx"));
const Products = lazy(() => import("./page/Products.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: (
          <Suspense
            fallback={<p className="text-center mt-10">Loading Contact...</p>}
          >
            <Contact />
          </Suspense>
        ),
      },
      { path: "product-details/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
      {
        path: "products",
        element: (
          <Suspense
            fallback={<p className="text-center mt-10">Loading Products...</p>}
          >
            <Products />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
