import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useIsAuth } from "../shared/hooks/isAuth";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Perfil from "../pages/perfil/Perfil";
import Project from "../pages/project/Project";
import Search from "../pages/search/Search";
import Header from "../shared/layout/header/Header";
import Contacts from "../shared/layout/chat/Contacts";

const Main = () => {
  const { isAuth } = useIsAuth();

  return (
    <Router>
      <div style={{ display: "flex", position: "relative" }}>
        {isAuth && <Header />}
        {isAuth && <Contacts />}
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
            path="project/:id"
            element={isAuth ? <Project /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!isAuth ? <Auth /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
