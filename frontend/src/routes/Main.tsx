import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useIsAuth } from "../hooks/isAuth";
import Contacts from "../layout/chat/Contacts";
import Header from "../layout/header/Header";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Perfil from "../pages/perfil/Perfil";
import Project from "../pages/project/Project";
import Search from "../pages/search/Search";

const Main = () => {
  const { isAuth } = useIsAuth();

  return (
    <Router>
      <div style={{ display: "flex", position: "relative" }}>
        {isAuth ? (
          <>
            <Header />
            <Contacts />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/perfil/:id" element={<Perfil />} />
              <Route path="/search/:name" element={<Search />} />
              <Route path="project/:id" element={<Project />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/auth" element={<Auth />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default Main;
