// assets
import "../styles/sign.css";

// tools
import { Link } from "react-router-dom";
import { useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faUserPlus,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch } from "react-redux";
import { signUp } from "../redux/Actions";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (username, email, password) => {
    dispatch(signUp(username, email, password));
    // dispatch(stopLoading());
  };

  return (
    <div className="sign_container">
      <div className="sign_form" action="#">
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

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="sign_input"
            type="text"
            placeholder="نام کاربری"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="sign_input"
            type="email"
            placeholder="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="sign_input"
            type="password"
            placeholder="رمز عبور"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="submit_btn"
            type="submit"
            onClick={() => submitForm(username, email, password)}
          >
            عضویت
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
