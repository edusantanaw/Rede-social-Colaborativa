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
import Header from "./layout/header/Header";
import Nav from "./layout/nav/Nav";
import Perfil from "./pages/perfil/Perfil";

function App() {
  const { isAuth } = useIsAuth();
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
       { isAuth && <Header />}
        <div style={{display: "flex", position: "relative", padding: "4.4em 0 0 0"}}>
          {isAuth && <Nav />}
          <Routes>
            <Route
              path="/"
              element={isAuth ? <Home /> : <Navigate to="/auth" />}
            />
            <Route
              path="/perfil/:id"
              element={isAuth ? <Perfil /> : <Navigate to="/auth" />}
            />
            <Route
              path="/auth"
              element={!isAuth ? <Auth /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
