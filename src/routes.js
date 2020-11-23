import { lazy } from "react";

export default [
  {
    path: "/register",
    label: "register",
    exact: true,
    component: lazy(() => import("./views/RegisterViews")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsViews")),
    private: true,
    restricted: false,
  },
  {
    path: "/login",
    label: "login",
    exact: true,
    component: lazy(() => import("./views/LoginViews")),
    private: false,
    restricted: true,
  },
];
