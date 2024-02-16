// assets
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="title_box">
        <div className="mini_title">تـمـاس بــا مــا</div>
        <div className="main_title">ارســـــال پــیــام</div>
      </div>

      <form className="message_form" action="#">
        <input placeholder="شماره تلفن" type="phone" />
        <input placeholder="نام و نام خانوادگی" type="text" />
        <textarea placeholder="متن پیام" />
        <button type="submit">ارسال پیام</button>
      </form>
    </div>
  );
};

export default Contact;
