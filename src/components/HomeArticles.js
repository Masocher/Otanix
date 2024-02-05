// assets
import "../styles/home-articles.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// tools
import { Link } from "react-router-dom";

const HomeArticles = () => {
  const state = [
    {
      id: 0,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "1",
    },
    {
      id: 1,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "2",
    },
    {
      id: 2,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "3",
    },
    {
      id: 3,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "4",
    },
    {
      id: 4,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "5",
    },
    {
      id: 5,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "6",
    },
    {
      id: 6,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "7",
    },
    {
      id: 7,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "8",
    },
    {
      id: 8,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "9",
    },
    {
      id: 9,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "10",
    },
    {
      id: 10,
      title: "آشنایی با وان پیس",
      cover: img1,
      studyTime: "11",
    },
  ];

  return (
    <div className="articles_wrapper">
      <div className="section_title_box">
        <span>جدیدترین مقالات</span>
        <div className="show_btn">
          مشاهده همه
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </div>
      </div>

      <div className="bottom_section">
        <Swiper
          slidesPerView={6}
          loop={true}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          className="home_articles_slider"
        >
          {state.map((article) => (
            <SwiperSlide className="article_box" key={article.id}>
              <Link to={"/a"} style={{ textDecoration: "none", color: "#fff" }}>
                <img src={article.cover} />

                <div className="main_title">{article.title}</div>

                <div className="article_info">
                  <div className="article_icons">
                    <div className="comments_num">
                      <FontAwesomeIcon icon={faCommentDots} />
                      <div>5</div>
                    </div>
                    <div className="likes_num">
                      <FontAwesomeIcon icon={faHeart} />
                      <div>2</div>
                    </div>
                  </div>

                  <div className="study_time">
                    زمان مطالعه : {article.studyTime} دقیقه
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeArticles;
