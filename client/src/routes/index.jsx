import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import TheConsumers from "../pages/TheConsumers";
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
        element: <TheConsumers />,
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
