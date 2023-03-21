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
import Perfil from "./pages/perfil/Perfil";
import Search from "./pages/search/Search";
import Contacts from "./layout/chat/Contacts";

function App() {
  const { isAuth } = useIsAuth();
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        {isAuth && <Header />}
        {isAuth && <Contacts />}
        <div style={{ display: "flex", position: "relative" }}>
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
              path="/search/:name"
              element={isAuth ? <Search /> : <Navigate to="/auth" />}
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
