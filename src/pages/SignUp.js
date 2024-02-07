// assets
import "../styles/sign.css";

// tools
import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faUserPlus,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <div className="sign_container">
      <form className="sign_form" action="#">
        <Link className="sign_back" to={"/"} style={{ textDecoration: "none" }}>
          برگشت به خانه
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </Link>

        <div className="top_buttons">
          <div>
            <FontAwesomeIcon icon={faUserPlus} />
            <span>عضویت</span>
          </div>

          <Link className="linked" to={"/sign-in"}>
            <FontAwesomeIcon icon={faLockOpen} />
            <span>ورود</span>
          </Link>
        </div>

        <div className="title_box">عضویت</div>
        <div className="description">
          به اوتانیکس خوش اومدی! برای عضویت اقدام کن
        </div>

        <input className="sign_input" type="text" placeholder="نام کاربری" />
        <input className="sign_input" type="email" placeholder="ایمیل" />
        <input className="sign_input" type="password" placeholder="گذرواژه" />

        <button className="submit_btn" type="submit">
          عضویت
        </button>
      </form>
    </div>
  );
};

export default SignUp;
