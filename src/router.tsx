import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layouts";
import Home from "./pages/Home";
import Category from "./pages/Category";
import My from "./pages/My";
import Post from "./pages/Post";
import { ShowError } from "./components/ShowError/ShowError";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:categoryName",
        element: <Category />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/my",
        element: <My />,
      },
      {
        path: "*",
        element: <ShowError />,
      },
    ],
  },
]);
