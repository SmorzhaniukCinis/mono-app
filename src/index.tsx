import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#e3d9ec',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "exchange",
        element: <div>exchange</div>,
      },
      {
        path: "profile",
        element: <div><Outlet/></div>,
        children: [
          {
            path: 'test',
            index: true,
            element: <div>test</div>
          },
          {
            path: 'test2',
            index: true,
            element: <div>test2</div>
          }
        ]
      },
      {
        path: "transaction",
        element: <div>transaction</div>,
      },
      {
        path: "authorization",
        element: <div>authorization</div>,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

