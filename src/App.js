// assets
import "./styles/all.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Anime from "./pages/Anime";
import Article from "./pages/Article";
import Discussions from "./pages/Discussions";

// react-router
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router";

// redux
import { useSelector } from "react-redux";

function App() {
  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  const location = useLocation();

  return (
    <div className={`App ${themeStatus ? "show" : ""}`}>
      {location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/animes/:animeId" element={<Anime />} />
        <Route path="/articles/:articleId" element={<Article />} />
      </Routes>

      {location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
