// assets
import "../styles/sign.css";

// tools
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faUserPlus,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch } from "react-redux";
import { signIn } from "../redux/Actions";

const SignIn = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (username, password) => {
    dispatch(signIn(username, password));
    // dispatch(stopLoading());
  };

  return (
    <div className="sign_container">
      <div
        className={`sign_form ${
          location.pathname === "/sign-in" ? "show" : ""
        }`}
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

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="sign_input"
            type="text"
            placeholder="نام کاربری"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="sign_input"
            type="password"
            placeholder="گذرواژه"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="submit_btn"
            type="submit"
            onClick={() => submitForm(username, password)}
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
