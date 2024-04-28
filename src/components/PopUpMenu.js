// assets
import "../styles/header.css";

// tools
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, changePopUpStatus } from "../redux/Actions";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";

const PopUpMenu = () => {
  const dispatch = useDispatch();

  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  const popUpStatus = useSelector((rootReducer) => rootReducer.popUpReducer);

  const location = useLocation();

  return (
    <div className={`menu_container ${popUpStatus ? "show" : ""}`}>
      {localStorage.getItem("isAuthenticated") ? (
        <div className="menu_icon_box">
          <Link
            to={"/pannel"}
            className="pannel_icon"
            onClick={() => dispatch(changePopUpStatus())}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>

<<<<<<< HEAD
          <div className="p_i_b_username">{localStorage.getItem("user")}</div>
=======
          <div className="p_i_b_username">
            {localStorage.getItem("user")
              ? JSON.parse(localStorage.getItem("user")).username
              : ""}
          </div>
>>>>>>> 8cde282d2df1f83ce0dc1b5a3596f819755ad47d
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Link
            to={"/sign-up"}
            className="sign_btn log_btn"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(changePopUpStatus())}
          >
            ثبت نام
          </Link>
          <Link
            to={"/sign-in"}
            className="sign_btn"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(changePopUpStatus())}
          >
            ورود
          </Link>
        </div>
      )}

      <div className={`theme_mode_wrapper ${themeStatus ? "show" : ""}`}>
        <span>
          <FontAwesomeIcon icon={faMoon} />
        </span>

        <div className="theme_mode_btn" onClick={() => dispatch(changeTheme())}>
          <div className={`mode_square ${themeStatus ? "show" : ""}`}></div>
        </div>

        <span className="sun_icon">
          <FontAwesomeIcon icon={faSun} />
        </span>
      </div>

      <Link
        to={"/"}
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(changePopUpStatus())}
      >
        <div className={`h_link ${location.pathname === "/" ? "show" : ""}`}>
          صفحه اصلی
        </div>
      </Link>
      <Link
        to={"/animes"}
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(changePopUpStatus())}
      >
        <div
          className={`h_link ${location.pathname === "/animes" ? "show" : ""}`}
        >
          انیمه ها
        </div>
      </Link>
      <Link
        to={"/discussions"}
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(changePopUpStatus())}
      >
        <div
          className={`h_link ${
            location.pathname === "/discussions" ? "show" : ""
          }`}
        >
          گفتگو ها
        </div>
      </Link>
      <Link
        to={"/characters"}
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(changePopUpStatus())}
      >
        <div
          className={`h_link ${
            location.pathname === "/characters" ? "show" : ""
          }`}
        >
          کاراکتر ها
        </div>
      </Link>
      <Link
        to={"/contact"}
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(changePopUpStatus())}
      >
        <div
          className={`h_link ${location.pathname === "/contact" ? "show" : ""}`}
        >
          تماس با ما
        </div>
      </Link>
    </div>
  );
};

export default PopUpMenu;
