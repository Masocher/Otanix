// assets
import "../styles/header.css";

// react-router
import { Link } from "react-router-dom";

// tools
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const locationPath = useLocation();
  const [location, setLocation] = useState(locationPath.pathname);
  console.log(location);

  return (
    <div className="header_container">
      <div className="right_side">
        <div className="logo_box">اوتانیکس</div>

        <div className="header_links">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={`h_link ${location === "/" ? "show" : ""}`}>
              صفحه اصلی
            </div>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={`h_link ${location === "/animes" ? "show" : ""}`}>
              انیمه ها
            </div>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={`h_link ${location === "/mangas" ? "show" : ""}`}>
              مانگا
            </div>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={`h_link ${location === "/about" ? "show" : ""}`}>
              درباره ما
            </div>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={`h_link ${location === "/contact" ? "show" : ""}`}>
              تماس با ما
            </div>
          </Link>
        </div>
      </div>

      <div className="left_side">
        <Link to={"/sign-up"} className="sign_btn log_btn" style={{ textDecoration: "none" }}>ثبت نام</Link>
        <Link to={"/sign-in"} className="sign_btn" style={{ textDecoration: "none" }}>ورود</Link>
      </div>
    </div>
  );
};

export default Header;
