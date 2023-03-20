import Composition from "./composition";
import Currying from "./currying";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import CleanFn from "./cleanFunction";
import StorePage from "./storePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "composition",
        element: <Composition />,
      },
      {
        path: "currying",
        element: <Currying />,
      },
      {
        path: "cleanfunction",
        element: <CleanFn />,
      },
      {
        path: "store",
        element: <StorePage />,
      },
    ],
  },
]);

export default router;
