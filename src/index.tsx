import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#e3d9ec"
    }
  }
});


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

