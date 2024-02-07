// assets
import "../styles/home-slider.css";
import img1 from "../images/animes/1.jpg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HomeSlider = () => {
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
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
    <div className="slider_container">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        className="back_slider"
        allowTouchMove={false}
      >
        <SwiperSlide>
          <img className="back_image" src={img1} alt="slider-background-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="back_image" src={img1} alt="slider-background-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="back_image" src={img1} alt="slider-background-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="back_image" src={img1} alt="slider-background-cover" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        navigation={false}
        pagination={false}
        scrollbar={false}
        className="front_slider"
        allowTouchMove={false}
      >
        {state.map((anime) => (
          <SwiperSlide key={anime.id} className="anime_slide">
            <img className="anime_image" src={anime.cover} alt="anime-cover" />

            <div className="anime_information">
              <div className="main_title">{anime.title}</div>
              <div className="persian_title">{anime.ptitle}</div>

              <div className="score_box">
                {anime.rate}
                <div>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>

              <div className="anime_tags">
                {anime.tags.map((tag) => (
                  <div className="tag_box" key={tag.id}>
                    {tag.title}
                  </div>
                ))}
              </div>

              <div className="anime_description">{anime.about}</div>

              <div className="play_btn">تماشای انیمه</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
