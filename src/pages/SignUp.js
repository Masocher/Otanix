// assets
import "../styles/sign.css";

// tools
import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
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

        <div className="title_box">ثبت نام</div>

        <input className="sign_input" type="text" placeholder="نام کاربری" />
        <input className="sign_input" type="email" placeholder="ایمیل" />
        <input className="sign_input" type="password" placeholder="گذرواژه" />

        <button className="submit_btn" type="submit">
          ثبت نام
        </button>

        <Link
          to={"/sign-in"}
          className="have_account"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          آیا از قبل ثبت نام کرده اید ؟
          <div className="sign_little_btn">ورود</div>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
