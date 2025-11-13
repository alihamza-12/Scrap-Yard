import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./components/AppLayOut/AppLayOut";
import NotFound from "./components/NotFound/NotFound";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <NotFound />,
      },
      {
        path: "/products",
        element: <NotFound />,
      },
      {
        path: "/blogs",
        element: <NotFound />,
      },
      {
        path: "/about-us",
        element: <NotFound />,
      },
      {
        path: "Contact-us",
        element: <NotFound />,
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
