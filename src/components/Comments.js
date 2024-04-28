// assets
import "../styles/comments.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faStar,
  faFaceTired,
  faFaceFrown,
  faFaceMeh,
  faFaceLaugh,
  faFaceGrinStars,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

// tools
import { useState } from "react";

const Comments = ({ anime }) => {
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

  const [rateStatus, setRateStatus] = useState(false);

  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

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

        <div className={`rate_box ${rateStatus ? "show" : ""}`}>
          {rateStatus ? (
            <div className="rate_stars">
              <div className="stars">
                <div
                  className={`star_icon ${star5 ? "show" : ""}`}
                  onMouseEnter={() => {
                    setStar1(true);
                    setStar2(true);
                    setStar3(true);
                    setStar4(true);
                    setStar5(true);
                  }}
                  onMouseLeave={() => {
                    setStar1(false);
                    setStar2(false);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <div className="emoji">
                    <FontAwesomeIcon icon={faFaceGrinStars} />
                  </div>
                </div>

                <div
                  className={`star_icon ${star4 ? "show" : ""}`}
                  onMouseEnter={() => {
                    setStar1(true);
                    setStar2(true);
                    setStar3(true);
                    setStar4(true);
                    setStar5(false);
                  }}
                  onMouseLeave={() => {
                    setStar1(false);
                    setStar2(false);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <div className="emoji">
                    <FontAwesomeIcon icon={faFaceLaugh} />
                  </div>
                </div>

                <div
                  className={`star_icon ${star3 ? "show" : ""}`}
                  onMouseEnter={() => {
                    setStar1(true);
                    setStar2(true);
                    setStar3(true);
                    setStar4(false);
                    setStar5(false);
                  }}
                  onMouseLeave={() => {
                    setStar1(false);
                    setStar2(false);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <div className="emoji">
                    <FontAwesomeIcon icon={faFaceMeh} />
                  </div>
                </div>

                <div
                  className={`star_icon ${star2 ? "show" : ""}`}
                  onMouseEnter={() => {
                    setStar1(true);
                    setStar2(true);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                  onMouseLeave={() => {
                    setStar1(false);
                    setStar2(false);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <div className="emoji">
                    <FontAwesomeIcon icon={faFaceFrown} />
                  </div>
                </div>

                <div
                  className={`star_icon ${star1 ? "show" : ""}`}
                  onMouseEnter={() => {
                    setStar1(true);
                    setStar2(false);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                  onMouseLeave={() => {
                    setStar1(false);
                    setStar2(false);
                    setStar3(false);
                    setStar4(false);
                    setStar5(false);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <div className="emoji">
                    <FontAwesomeIcon icon={faFaceTired} />
                  </div>
                </div>
              </div>

              <span>
                <div className="emoji_status">
                  {star1 && star2 && star3 && star4 && star5 ? (
                    <FontAwesomeIcon icon={faFaceGrinStars} />
                  ) : null}

                  {star1 && star2 && star3 && star4 && !star5 ? (
                    <FontAwesomeIcon icon={faFaceLaugh} />
                  ) : null}

                  {star1 && star2 && star3 && !star4 && !star5 ? (
                    <FontAwesomeIcon icon={faFaceMeh} />
                  ) : null}

                  {star1 && star2 && !star3 && !star4 && !star5 ? (
                    <FontAwesomeIcon icon={faFaceFrown} />
                  ) : null}

                  {star1 && !star2 && !star3 && !star4 && !star5 ? (
                    <FontAwesomeIcon icon={faFaceTired} />
                  ) : null}

                  {!star1 && !star2 && !star3 && !star4 && !star5 ? (
                    <FontAwesomeIcon icon={faQuestion} />
                  ) : null}
                </div>

                <div className="submit_rate_mini_btn">ثبت</div>
              </span>
            </div>
          ) : (
            <div className="rate_list">
              <div className="title_box">به این انیمه امتیاز بدهید</div>
              <div className="submit_rate" onClick={() => setRateStatus(true)}>
                ثبت امتیاز
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
