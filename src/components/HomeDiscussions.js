// assets
import "../styles/home-discussions.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const HomeDiscussions = () => {
  return (
    <div className="home_discussions">
      <div className="section_title_box">
        <span>بحث و گفتگو</span>
        <div className="show_btn">مشاهده گفتگو ها</div>
      </div>

      <div className="discussions">
        <div className="discussion_box">
          <div className="user_box">
            <div className="user_image">
              <img src={img1} alt="user-profile" />
            </div>

            <div className="user_name">Masocher</div>
          </div>

          <div className="title_box">وان پیس بهترین انیمه سال !</div>

          <div className="description">
            داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام
            کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق
            انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها
            را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست
            ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی
            بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...
          </div>

          <div className="discussion_buttons">
            <div className="show_more">مشاهده جزئیات</div>

            <div className="discussion_reply">
              <div className="reply_icon">
                <FontAwesomeIcon icon={faReply} />
              </div>

              <div className="discussion_reply_num">۰</div>
            </div>
          </div>
        </div>

        <div className="discussion_box">
          <div className="user_box">
            <div className="user_image">
              <img src={img1} alt="user-profile" />
            </div>

            <div className="user_name">Masocher</div>
          </div>

          <div className="title_box">وان پیس بهترین انیمه سال !</div>

          <div className="description">
            داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام
            کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق
            انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها
            را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست
            ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی
            بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...
          </div>

          <div className="discussion_buttons">
            <div className="show_more">مشاهده جزئیات</div>

            <div className="discussion_reply">
              <div className="reply_icon">
                <FontAwesomeIcon icon={faReply} />
              </div>

              <div className="discussion_reply_num">۰</div>
            </div>
          </div>
        </div>

        <div className="discussion_box">
          <div className="user_box">
            <div className="user_image">
              <img src={img1} alt="user-profile" />
            </div>

            <div className="user_name">Masocher</div>
          </div>

          <div className="title_box">وان پیس بهترین انیمه سال !</div>

          <div className="description">
            داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام
            کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق
            انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها
            را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست
            ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی
            بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...
          </div>

          <div className="discussion_buttons">
            <div className="show_more">مشاهده جزئیات</div>

            <div className="discussion_reply">
              <div className="reply_icon">
                <FontAwesomeIcon icon={faReply} />
              </div>

              <div className="discussion_reply_num">۰</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDiscussions;
