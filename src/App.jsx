import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./components/AppLayOut/AppLayOut";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import BlogsDetail from "./pages/BlogsDetail";
import ProductDetail from "./pages/ProductDetail";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogsDetail />,
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
