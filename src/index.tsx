import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { persistor, store } from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#e3d9ec",
      dark: '#383838'
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
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

