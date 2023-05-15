import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import TheConsumers from "../pages/TheConsumers";
import TheLgu from "../pages/TheLgu";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import TheBusiness from "../pages/TheBusiness";
import Pager from "../components/Common/Pager";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Pager content={<TheConsumers />} title="The Consumers" />,
      },
      {
        path: "/the-lgu",
        element: <Pager content={<TheLgu />} title="The LGU" />,
      },
      {
        path: "/the-team",
        element: <Pager content={<AboutUs />} title="The Team" />,
      },
      {
        path: "/the-business",
        element: <Pager content={<TheBusiness />} title="The Business" />,
      },
    ],
  },
]);

export { router };
