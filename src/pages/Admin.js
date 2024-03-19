// assets
import "../styles/admin.css";

// components
import AdminAnimes from "../components/AdminAnimes";
import AdminCharacters from "../components/AdminCharacters";
import AdminDiscussions from "../components/AdminDiscussions";
import AdminComments from "../components/AdminComments";
import AdminUsers from "../components/AdminUsers";

// tools
import { useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/Actions";

const Admin = () => {
  const dispatch = useDispatch();

  const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

  const [adminSections, setAdminSections] = useState("animes");

  return (
    <div className="admin_container">
      <div className="admin_menu">
        <div className="main_title">پـنــل ادمـــیـن</div>

        <div
          className={`table_btn ${adminSections === "animes" ? "show" : ""}`}
          onClick={() => setAdminSections("animes")}
        >
          انیمه ها
        </div>

        <div
          className={`table_btn ${
            adminSections === "characters" ? "show" : ""
          }`}
          onClick={() => setAdminSections("characters")}
        >
          کاراکتر ها
        </div>

        <div
          className={`table_btn ${
            adminSections === "discussions" ? "show" : ""
          }`}
          onClick={() => setAdminSections("discussions")}
        >
          گفتگو ها
        </div>

        <div
          className={`table_btn ${adminSections === "comments" ? "show" : ""}`}
          onClick={() => setAdminSections("comments")}
        >
          کامنت ها
        </div>

        <div
          className={`table_btn ${adminSections === "users" ? "show" : ""}`}
          onClick={() => setAdminSections("users")}
        >
          کاربران
        </div>

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
      </div>

      <div className="tables">
        {adminSections === "animes" ? (
          <AdminAnimes />
        ) : adminSections === "characters" ? (
          <AdminCharacters />
        ) : adminSections === "discussions" ? (
          <AdminDiscussions />
        ) : adminSections === "comments" ? (
          <AdminComments />
        ) : adminSections === "users" ? (
          <AdminUsers />
        ) : (
          "nothing"
        )}
      </div>
    </div>
  );
};

export default Admin;
