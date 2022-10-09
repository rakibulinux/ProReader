import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Books from "../components/Books";
import About from "../components/About";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage";
import BookDetails from "../components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/books",
        loader: () => fetch("https://api.itbook.store/1.0/new"),
        element: <Books />,
      },
      {
        path: "/book/:isbn13",
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.isbn13}`),
        element: <BookDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
