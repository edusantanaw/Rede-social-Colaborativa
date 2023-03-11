import { GlobalStyle } from "./styles/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import { useIsAuth } from "./hooks/isAuth";

function App() {
  const {isAuth} = useIsAuth()
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!isAuth ? <Auth /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
