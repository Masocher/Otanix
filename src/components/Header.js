// assets
import "../styles/header.css";

// react-router
import { Link } from "react-router-dom";

// tools
import { useLocation } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/Actions";

const Header = () => {
  const dispatch = useDispatch();
  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  const location = useLocation();

  return (
    <div className="header_container">
      <div className="right_side">
        <div className="logo_box">اوتانیکس</div>

        <div className="header_links">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div
              className={`h_link ${location.pathname === "/" ? "show" : ""}`}
            >
              صفحه اصلی
            </div>
          </Link>
          <Link to={"/animes"} style={{ textDecoration: "none" }}>
            <div
              className={`h_link ${
                location.pathname === "/animes" ? "show" : ""
              }`}
            >
              انیمه ها
            </div>
          </Link>
          <Link to={"/discussions"} style={{ textDecoration: "none" }}>
            <div
              className={`h_link ${
                location.pathname === "/discussions" ? "show" : ""
              }`}
            >
              گفتگو ها
            </div>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <div
              className={`h_link ${
                location.pathname === "/contact" ? "show" : ""
              }`}
            >
              تماس با ما
            </div>
          </Link>
        </div>
      </div>

      <div className="left_side">
        <div className={`theme_mode_wrapper ${themeStatus ? "show" : ""}`}>
          <span>
            <FontAwesomeIcon icon={faMoon} />
          </span>

          <div
            className="theme_mode_btn"
            onClick={() => dispatch(changeTheme())}
          >
            <div className={`mode_square ${themeStatus ? "show" : ""}`}></div>
          </div>

          <span className="sun_icon">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </div>

        <Link
          to={"/sign-up"}
          className="sign_btn log_btn"
          style={{ textDecoration: "none" }}
        >
          ثبت نام
        </Link>
        <Link
          to={"/sign-in"}
          className="sign_btn"
          style={{ textDecoration: "none" }}
        >
          ورود
        </Link>
      </div>
    </div>
  );
};

export default Header;
