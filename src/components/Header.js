// assets
import "../styles/header.css";

// react-router
import { Link } from "react-router-dom";

// tools
import { useLocation } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, changePopUpStatus } from "../redux/Actions";

// components
import PopUpMenu from "./PopUpMenu";

const Header = () => {
  const dispatch = useDispatch();

  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  const popUpStatus = useSelector((rootReducer) => rootReducer.popUpReducer);

  const location = useLocation();

  return (
    <div className="header_container">
      <div className="right_side">
        <Link to={"/"} className="logo_box" style={{ textDecoration: "none" }}>
          اوتانیکس
        </Link>

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
          <Link to={"/characters"} style={{ textDecoration: "none" }}>
            <div
              className={`h_link ${
                location.pathname === "/characters" ? "show" : ""
              }`}
            >
              کاراکتر ها
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

      <div className="menu_icon" onClick={() => dispatch(changePopUpStatus())}>
        <FontAwesomeIcon icon={popUpStatus ? faClose : faBars} />
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

        {localStorage.getItem("isAuthenticated") ? (
          <Link to={"/pannel"} className="pannel_icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        ) : (
          <div style={{ display: "flex" }}>
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
        )}
      </div>

      <PopUpMenu />
    </div>
  );
};

export default Header;
