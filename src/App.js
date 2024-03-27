import React from "react";

import { Provider } from "react-redux";

import { store } from "./store/store";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

import AppRoutes from "./Routes";

import { Loading, Notify, Alert } from "./view/components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Notify />
        <Alert />
        <Loading />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
