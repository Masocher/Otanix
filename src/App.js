// assets
import "./styles/all.css";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";

// react-router
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
