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

// react-hot-toast
import { Toaster, toast } from "react-hot-toast";

const SignIn = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passwordRegex = /^(?=.{8,20})/;
  const usernameRegex = /^(?=.{4,20}$)(?![_.])[a-zA-Z0-9@/./+/-/_]/;

  let [usernameInputStatus, setUsernameInputStatus] = useState(false);
  let [passwordInputStatus, setPasswordInputStatus] = useState(false);

  const submitForm = (username, password) => {
    if (username.length < 1) {
      toast.error("نام کاربری الزامی است", {
        style: {
          borderRadius: "10px",
          fontSize: "14px",
          background: "#282828",
          color: "#fff",
          padding: "10px 20px 10px 15px",
        },
      });
      setUsernameInputStatus(true);
    } else if (usernameRegex.test(username) === false) {
      toast.error("نام کاربری قابل قبول نیست", {
        style: {
          borderRadius: "10px",
          fontSize: "14px",
          background: "#282828",
          color: "#fff",
          padding: "10px 20px 10px 15px",
        },
      });
      setUsernameInputStatus(true);
    } else if (password.length < 1) {
      toast.error("رمز عبور الزامی است", {
        style: {
          borderRadius: "10px",
          fontSize: "14px",
          background: "#282828",
          color: "#fff",
          padding: "10px 20px 10px 15px",
        },
      });
      setPasswordInputStatus(true);
    } else if (passwordRegex.test(password) === false) {
      toast.error("رمز عبور قابل قبول نیست", {
        style: {
          borderRadius: "10px",
          fontSize: "14px",
          background: "#282828",
          color: "#fff",
          padding: "10px 20px 10px 15px",
        },
      });
      setPasswordInputStatus(true);
    } else {
      setUsernameInputStatus(false);
      setPasswordInputStatus(false);
      dispatch(signIn(username, password));
      toast.success("با موفقیت وارد شدید", {
        style: {
          borderRadius: "10px",
          fontSize: "14px",
          background: "#282828",
          color: "#fff",
          padding: "10px 20px 10px 15px",
        },
      });
      // Router.push("/");
      // dispatch(stopLoading());
    }
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
            className={`sign_input ${
              usernameInputStatus === true ? "error" : "correct"
            }`}
            type="text"
            placeholder="نام کاربری"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={`sign_input ${
              passwordInputStatus === true ? "error" : "correct"
            }`}
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

      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default SignIn;
