// assets
import "./styles/all.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// react-router
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {
        location.pathname === "/sign-in" || location.pathname === "/sign-up" ?
        null
        :
        <Header />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      {
        location.pathname === "/sign-in" || location.pathname === "/sign-up" ?
        null
        :
        <Footer />
      }
    </div>
  );
}

export default App;
