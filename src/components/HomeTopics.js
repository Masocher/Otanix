// assets
import "../styles/home-topics.css";
import "../styles/anime-box.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faHeart,
  faBell,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// tools
import { Link } from "react-router-dom";

const HomeTopics = () => {
  const state = [
    {
      id: 0,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 0, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
    },
    {
      id: 1,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 0, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
    },
    {
      id: 2,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 0, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
    },
    {
      id: 3,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 0, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
    },
    {
      id: 4,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 0, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
    },
    {
      id: 5,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 0, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
    },
  ];
  return (
    <div className="home_topics">
      <div className="section_title_box">
        <span>انیمه های برتر</span>
        <div className="show_btn">
          مشاهده همه
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </div>
      </div>

      <div className="bottom_section">
        {state.map((anime) => (
          <div className="anime_box" key={anime.id}>
            <img src={img1} alt="anime-cover" />

            <div className="anime_info">
              <div className="titles">
                <div className="e_title">{anime.title}</div>
                <div className="p_title">{anime.ptitle}</div>
              </div>

              <div className="anime_footer">
                <div className="anime_buttons">
                  <div>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                </div>

                <div className="score">
                  {anime.rate}
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </div>

              <Link
                to={`/anime/${anime.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="show_anime">مشاهده جزئیات</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopics;
