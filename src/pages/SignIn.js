// assets
import "../styles/sign.css";

// tools
import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [signFormStatus, setSignFormStatus] = useState("");

  setInterval(() => {
    setSignFormStatus("show");
  }, 500);

  return (
    <div className="sign_container">
      <form className={`sign_form ${signFormStatus}`} action="#">
        <Link to={"/"} className="close_btn">
          <FontAwesomeIcon icon={faClose} />
        </Link>

        <div className="title_box">ورود به حساب</div>

        <input className="sign_input" type="text" placeholder="ایمیل" />
        <input className="sign_input" type="password" placeholder="گذرواژه" />

        <button className="submit_btn" type="submit">
          ورود
        </button>

        <Link
          to={"/sign-up"}
          className="have_account"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          آیا از قبل ثبت نام نکرده اید ؟
          <div className="sign_little_btn">ثبت نام</div>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
