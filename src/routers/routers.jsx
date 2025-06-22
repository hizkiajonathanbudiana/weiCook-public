import { createBrowserRouter } from "react-router";
import PubMenu from "../pages/PubMenu";
import PubDetail from "../pages/PubDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PubMenu />,
  },
  {
    path: "/details/:id",
    element: <PubDetail />,
  },
]);

export default router;
