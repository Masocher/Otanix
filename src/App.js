// assets
import "./styles/all.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// react-router
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router";

// redux
import { useSelector } from "react-redux";

// pages
import React, { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Anime = React.lazy(() => import("./pages/Anime"));
const Animes = React.lazy(() => import("./pages/Animes"));
const Discussions = React.lazy(() => import("./pages/Discussions"));
const Discussion = React.lazy(() => import("./pages/Discussion"));
const Pannel = React.lazy(() => import("./pages/Pannel"));
const Characters = React.lazy(() => import("./pages/Characters"));
const Character = React.lazy(() => import("./pages/Character"));
const Admin = React.lazy(() => import("./pages/Admin"));

function App() {
  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  const location = useLocation();

  return (
    <div className={`App ${themeStatus ? "show" : ""}`}>
      {location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/pannel" ||
      location.pathname === "/admin" ? null : (
        <Header />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          }
        />

        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          }
        />

        <Route
          path="/animes"
          element={
            <Suspense fallback={<Loading />}>
              <Animes />
            </Suspense>
          }
        />

        <Route
          path="/discussions"
          element={
            <Suspense fallback={<Loading />}>
              <Discussions />
            </Suspense>
          }
        />

        <Route
          path="/discussions/:discussionId"
          element={
            <Suspense fallback={<Loading />}>
              <Discussion />
            </Suspense>
          }
        />

        <Route
          path="/animes/:animeId"
          element={
            <Suspense fallback={<Loading />}>
              <Anime />
            </Suspense>
          }
        />

        <Route
          path="/pannel"
          element={
            <Suspense fallback={<Loading />}>
              <Pannel />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />

        <Route
          path="/characters"
          element={
            <Suspense fallback={<Loading />}>
              <Characters />
            </Suspense>
          }
        />

        <Route
          path="/characters/:characterId"
          element={
            <Suspense fallback={<Loading />}>
              <Character />
            </Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<Loading />}>
              <Admin />
            </Suspense>
          }
        />
      </Routes>

      {location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/pannel" ||
      location.pathname === "/admin" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
