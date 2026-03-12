import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomeMain from "../Pages/HomeRoots/HomeMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
    ],
  },
]);
export default router;
