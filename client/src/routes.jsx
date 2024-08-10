import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ExplorePage = lazy(() => import("./pages/ExplorePage"));
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const PageNotFound = lazy(() => import("./components/global/PageNotFound"));

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/restaurant/menu/:id",
    element: <RestaurantPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
