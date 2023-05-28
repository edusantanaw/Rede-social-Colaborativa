import { GlobalStyle } from "./styles/Global";
import Main from "./routes/Main";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#d84f53",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
