import { createTheme, ThemeProvider } from "@mui/material/styles";

import { TextField } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";

import AppRoutes from "./Routes";

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
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
