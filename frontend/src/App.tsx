import { GlobalStyle } from "./styles/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

function App() {
  const auth = false;
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!auth ? <Auth /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
