// assets
import "../styles/comments.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
  const state = [
    {
      id: 0,
      description:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 1,
      description:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 2,
      description:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 3,
      description:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
    {
      id: 4,
      description:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    },
  ];

  return (
    <div className="comments_container">
      <div className="comments_section">
        <div className="comments_section_wrapper">
          <form className="comment_form" action="#">
            <input type="text" placeholder="نظرت درمورد این انیمه چیه ؟" />
            <button type="submit">ثبت نظر</button>
          </form>

          <div className="comments">
            {state.map((comm) => (
              <div className="comment_box" key={comm.id}>
                <div className="user_box">
                  <div className="user_cover">
                    <img src={img1} alt="user-profile-cover" />
                  </div>

                  <div className="user_name">Masocher</div>
                </div>

                <div className="description">{comm.description}</div>

                <div className="comment_buttons">
                  <div className="comment_btn">
                    <span>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                    <div>0</div>
                  </div>

                  <div className="comment_btn comm_left_btn">
                    <span>
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </span>
                    <div>0</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rate_box">
          <div className="title_box">به این انیمه امتیاز بدهید</div>

          <div className="submit_rate">ثبت امتیاز</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
