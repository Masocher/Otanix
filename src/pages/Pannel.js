// assets
import "../styles/pannel.css";
import "../styles/anime-box.css";

// tools
import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faBell,
  faComments,
  faEdit,
  faArrowRight,
  faMessage,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, logOut } from "../redux/Actions";

const Pannel = () => {
  const dispatch = useDispatch();
  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  return (
    <div className="pannel_wrapper">
      <div className="back_side">
        <div className="menu_section">
          <Link
            to={"/"}
            className="logo_box"
            style={{ textDecoration: "none" }}
          >
            اوتانیکس
          </Link>

          <div className="menu_section_btn show">
            <div>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            لیست تماشا
          </div>

          <div className="menu_section_btn">
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            اعلانات
          </div>

          <div className="menu_section_btn">
            <div>
              <FontAwesomeIcon icon={faComments} />
            </div>
            گفتگو ها
          </div>

          <div className="menu_section_btn">
            <div>
              <FontAwesomeIcon icon={faEdit} />
            </div>
            ویرایش اطلاعات
          </div>

          <div className="menu_section_btn">
            <div>
              <FontAwesomeIcon icon={faMessage} />
            </div>
            کامنت های شما
          </div>

          <div
            className="menu_section_btn log_out_btn"
            onClick={() => dispatch(logOut())}
          >
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            خروج از حساب
          </div>
        </div>

        <div className="top_side">
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

          <div className="pannel_icon_box">
            <div className="p_i_b_username">{JSON.parse(localStorage.getItem("user")).username}</div>

            <Link to={"/pannel"} className="pannel_icon">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>
      </div>

      <div className="front_side"></div>
    </div>
  );
};

export default Pannel;
