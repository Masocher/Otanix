// assets
import "../styles/discussion.css";
import img1 from "../images/animes/1.jpg";

// tools
import { useParams } from "react-router";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReply,
  faFolderOpen,
  faTriangleExclamation,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const Discussion = () => {
  const state = [
    {
      id: 0,
      title: "آشنایی با وان پیس",
      category: "وان پیس",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 1,
      title: "آشنایی با وان پیس",
      category: "وان پیس",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 2,
      title: "آشنایی با وان پیس",
      category: "وان پیس",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 3,
      title: "آشنایی با وان پیس",
      category: "وان پیس",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 4,
      title: "آشنایی با وان پیس",
      category: "وان پیس",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 5,
      title: "آشنایی با وان پیس",
      category: "وان پیس",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
  ];

  const { discussionId } = useParams();

  const discussion = state[discussionId];

  return (
    <div className="discussion_container">
      <div className="top_section">
        <div className="user_box">
          <img
            src={img1}
            className="user_profile_image"
            alt="user-profile-cover"
          />

          <div className="user_about">
            <span>
              <div className="user_name">Masocher</div>
              <div className="discussion_date">1 سال پیش مطرح شد</div>
            </span>

            <div className="discussion_info_boxes">
              <div className="category">
                <div className="category_content">
                  <div>
                    <FontAwesomeIcon icon={faFolderOpen} />
                  </div>
                  {discussion.category}
                </div>
              </div>

              <div className="reply_box">
                <div>
                  <FontAwesomeIcon icon={faReply} />
                </div>
                2 پاسخ
              </div>
            </div>
          </div>
        </div>

        <div className="title_box">{discussion.title}</div>

        <div className="description">{discussion.about}</div>
      </div>

      <div className="bottom_section">
        <div className="right_side">
          <form className="answer_form" action="#">
            <input placeholder="چیزی بنویسید ..." />
            <button type="submit">ثبت پاسخ</button>
          </form>

          <div className="answers_list">
            <div className="answer_box">
              <div className="user_box">
                <img src={img1} alt="user-profile-cover" />

                <div className="user_about">
                  <span>
                    <div className="user_name">Masocher</div>
                    <div className="discussion_date">1 سال پیش مطرح شد</div>
                  </span>

                  <div className="icon_box">
                    <span>
                      <FontAwesomeIcon icon={faTriangleExclamation} />
                    </span>
                    گزارش تخلف
                  </div>
                </div>
              </div>

              <div className="answer">{discussion.about}</div>

              <div className="answer_btn">
                <div>
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
                ارسال پاسخ
              </div>
            </div>
          </div>
        </div>

        <div className="left_side">
          <div className="animes">
            <div className="discussion_anime">
              <img src={img1} alt="anime-cover" />
              <div className="title_box">وان پیس</div>
              <div className="show_btn">نمایش انیمه</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
