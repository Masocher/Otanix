// assets
import "../styles/footer.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="section left_section">
        <div className="title_box">درباره اوتانیکس</div>

        <div className="description">
          داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام
          کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق
          انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را
          از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست
          ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی
          بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...
        </div>
      </div>

      <div className="section">
        <div className="about_box">
          <div className="icon_box">
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <div className="title_box">
            9031698509 - <span>98+</span>
          </div>
        </div>

        <div className="about_box">
          <div className="icon_box">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <div className="title_box">Masocherr@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
