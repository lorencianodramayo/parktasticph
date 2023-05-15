import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import HowItWorks from "../pages/HowItWorks";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
    ],
  },
]);

export { router };
