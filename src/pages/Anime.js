// assets
import "../styles/anime.css";
import img1 from "../images/animes/1.jpg";

// tools
import { useParams } from "react-router";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBell,
  faClosedCaptioning,
  faUserPlus,
  faLocationDot,
  faCalendarDays,
  faRotate,
  faClock,
  faListOl,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

// components
import AnimeCharactersSlider from "../components/AnimeCharactersSlider";
import Comments from "../components/Comments";
import HomeTopics from "../components/HomeTopics";

const Anime = () => {
  const state = [
    {
      id: 0,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 1, title: "علمی تخیلی" },
        { id: 2, title: "اکشن" },
        { id: 3, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
      country: "ژاپن",
      votes: "425",
    },
    {
      id: 1,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 1, title: "علمی تخیلی" },
        { id: 2, title: "اکشن" },
        { id: 3, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
      country: "ژاپن",
      votes: "425",
    },
    {
      id: 2,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 1, title: "علمی تخیلی" },
        { id: 2, title: "اکشن" },
        { id: 3, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
      country: "ژاپن",
      votes: "425",
    },
    {
      id: 3,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 1, title: "علمی تخیلی" },
        { id: 2, title: "اکشن" },
        { id: 3, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
      country: "ژاپن",
      votes: "425",
    },
    {
      id: 4,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 1, title: "علمی تخیلی" },
        { id: 2, title: "اکشن" },
        { id: 3, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
      country: "ژاپن",
      votes: "425",
    },
    {
      id: 5,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      tags: [
        { id: 0, title: "اکشن" },
        { id: 1, title: "علمی تخیلی" },
        { id: 2, title: "اکشن" },
        { id: 3, title: "علمی تخیلی" },
      ],
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
      cover: img1,
      country: "ژاپن",
      votes: "425",
    },
  ];

  const { animeId } = useParams();

  const anime = state[animeId];

  return (
    <div className="anime_container">
      <img
        className="anime_background_cover"
        src={anime.cover}
        alt="anime-background-cover"
      />

      <div className="anime_single_box">
        <div className="right_side">
          <div className="right_side_r_sec">
            <img className="anime_cover" src={anime.cover} alt="anime-cover" />

            <div className="icons">
              <div>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div>
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>

          <div className="right_side_information">
            <div className="title_box">
              <div>{anime.title}</div>
              <div>{anime.ptitle}</div>
            </div>

            <div className="anime_tags">
              <div className="tags_title_box">ژانر ها :</div>

              <div className="anime_tag_boxes">
                {anime.tags.map((tag) => (
                  <div className="anime_tag" key={tag.id}>
                    {tag.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="attributes">
              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faClosedCaptioning} />
                </div>
                <div className="attribute_title">
                  زیرنویس <span>دارد</span>
                </div>
              </div>

              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faUserPlus} />
                </div>
                <div className="attribute_title">
                  رده سنی <span>بالای 14 سال</span>
                </div>
              </div>

              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="attribute_title">
                  کشور <span>{anime.country}</span>
                </div>
              </div>

              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <div className="attribute_title">
                  سال تولید <span>2022</span>
                </div>
              </div>

              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faRotate} />
                </div>
                <div className="attribute_title">
                  وضعیت <span>اتمام پخش</span>
                </div>
              </div>

              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="attribute_title">
                  زمان هر قسمت <span>23 دقیقه</span>
                </div>
              </div>

              <div className="attribute">
                <div className="attribute_icon">
                  <FontAwesomeIcon icon={faListOl} />
                </div>
                <div className="attribute_title">
                  تعداد فصل <span>4 فصل</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left_side">
          <div className="left_side_title">
            <div className="anime_score_votes">({anime.votes}) نفر</div>

            <div className="anime_score_box">
              <span>10 /</span>
              <div>{anime.rate}</div>
            </div>
          </div>

          <div className="anime_description">{anime.about}</div>

          <div className="play_btn">پخش تریلـر</div>
        </div>
      </div>

      <AnimeCharactersSlider />

      <div className="last_episode_wrapper">
        <div className="section_title_box">
          <span>جدیدترین قسمت</span>
        </div>

        <div className="last_episode">
          <div className="right_side">
            <img src={img1} alt="new-episode-cover" />

            <div className="time_box">23:20</div>

            <div className="play_icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>

          <div className="description">
            داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام
            کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق
            انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها
            را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست
            ندارد، نیھل که بیشتر خودش انسان است.
          </div>

          <div className="play_new_ep_btn">
            <div>
              <FontAwesomeIcon icon={faPlay} />
            </div>
            تماشا کنید
          </div>
        </div>
      </div>

      <HomeTopics state={state} title={"انیمه های مشابه"} showBtn={false} />
      <Comments />
    </div>
  );
};

export default Anime;
