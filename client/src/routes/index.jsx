import React, { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const Main = lazy(() => import("../pages/Main"));
const TheConsumers = lazy(() => import("../pages/TheConsumers"));
const TheLgu = lazy(() => import("../pages/TheLgu"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const TheTeam = lazy(() => import("../pages/TheTeam"));
const TheBusiness = lazy(() => import("../pages/TheBusiness"));
const Pager = lazy(() => import("../components/Common/Pager"));

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
        element: <Pager content={<TheTeam />} title="The Team" />,
      },
      {
        path: "/the-business",
        element: <Pager content={<TheBusiness />} title="The Business" />,
      },
    ],
  },
]);

export { router };
