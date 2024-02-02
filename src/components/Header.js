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
        <div className="logo_box">OTANIX</div>

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
        <div className="sign_btn log_btn">ثبت نام</div>
        <div className="sign_btn">ورود</div>
      </div>
    </div>
  );
};

export default Header;
