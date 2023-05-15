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
        path: "/the-lgu",
        element: <>LGU</>,
      },
      {
        path: "/the-team",
        element: <AboutUs />,
      },
      {
        path: "/the-business",
        element: <HowItWorks />,
      },
    ],
  },
]);

export { router };
