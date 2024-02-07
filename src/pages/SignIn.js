// assets
import "../styles/sign.css";

// tools
import { Link, useLocation } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faUserPlus,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const location = useLocation();

  return (
    <div className="sign_container">
      <form
        className={`sign_form ${
          location.pathname === "/sign-in" ? "show" : ""
        }`}
        action="#"
      >
        <Link className="sign_back" to={"/"} style={{ textDecoration: "none" }}>
          برگشت به خانه
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </Link>

        <div className="top_buttons">
          <Link className="linked" to={"/sign-up"}>
            <FontAwesomeIcon icon={faUserPlus} />
            <span>عضویت</span>
          </Link>

          <div>
            <FontAwesomeIcon icon={faLockOpen} />
            <span>ورود</span>
          </div>
        </div>

        <div className="title_box">ورود</div>
        <div className="description">خوش برگشتی! اگه عضو هستی وارد شو</div>

        <input className="sign_input" type="email" placeholder="ایمیل" />
        <input className="sign_input" type="password" placeholder="گذرواژه" />

        <button className="submit_btn" type="submit">
          ورود
        </button>
      </form>
    </div>
  );
};

export default SignIn;
