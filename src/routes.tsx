import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Exchange from "./components/Exchange/Exchange";
import Profile from "./components/Profile/Profile";
import Info from "./components/Profile/Info";
import Accounts from "./components/Profile/Accounts";
import Jars from "./components/Profile/Jars";
import Transactions from "./components/Transactions/Transactions";
import Authorization from "./components/Authorization/Authorization";
import React from "react";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "exchange",
        element: <Exchange/>
      },
      {
        path: "profile",
        element: <Profile/>,
        children: [
          {
            path: "info",
            element: <Info/>
          },
          {
            path: "accounts",
            index: true,
            element: <Accounts/>
          },
          {
            path: "jars",
            index: true,
            element: <Jars/>
          }
        ]
      },
      {
        path: "transaction",
        element: <Transactions/>
      },
      {
        path: "authorization",
        element: <Authorization/>
      }
    ]
  }
]);
export default router