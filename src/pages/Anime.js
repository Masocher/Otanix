// assets
import "../styles/anime.css";
import img1 from "../images/animes/1.jpg";

// tools
import { useParams } from "react-router";
import { useState, useEffect } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faBell,
  faClosedCaptioning,
  faUserPlus,
  faSunPlantWilt,
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

// axios
import axios from "axios";
import Loading from "../components/Loading";

const Anime = () => {
  let { animeUrlSlug } = useParams();

  console.log("url : " + animeUrlSlug);

  let [anime, setAnime] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("getting single anime");
    axios
      .get(`https://otanix-api.liara.run/api/anime/${animeUrlSlug}`)
      .then((response) => {
        setLoading(true);
        setAnime(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    console.log("ending the getting single anime");
  }, []);

  let [animes, setAnimes] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log("getting animes");
    axios
      .get("https://otanix-api.liara.run/api/anime/")
      .then((response) => setAnimes(response.data))
      .catch((error) => console.log(error));
    console.log("ending the getting animes");
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="anime_container">
        <img
          className="anime_background_cover"
          src={anime.image}
          alt="anime-background-cover"
        />

        <div className="anime_single_box">
          <div className="right_side">
            <div className="right_side_r_sec">
              <img
                className="anime_cover"
                src={anime.image}
                alt="anime-cover"
              />

              <div className="icons">
                <div>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBell} />
                </div>
              </div>
            </div>

            <div className="right_side_information">
              <div className="title_box">
                <div>{anime.title_english}</div>
                <div>{anime.title}</div>
              </div>

              <div className="anime_tags">
                <div className="tags_title_box">ژانر ها :</div>

                <div className="anime_tag_boxes">
                  {anime.genres
                    ? anime.genres.map((genre) => (
                        <div className="tag_box" key={genre.id}>
                          {genre.persian_name}
                        </div>
                      ))
                    : ""}
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
                    رده سنی <span>{anime.rating}</span>
                  </div>
                </div>

                <div className="attribute">
                  <div className="attribute_icon">
                    <FontAwesomeIcon icon={faSunPlantWilt} />
                  </div>
                  <div className="attribute_title">
                    فصل <span>{anime.season}</span>
                  </div>
                </div>

                <div className="attribute">
                  <div className="attribute_icon">
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </div>
                  <div className="attribute_title">
                    سال تولید <span>{anime.year}</span>
                  </div>
                </div>

                <div className="attribute">
                  <div className="attribute_icon">
                    <FontAwesomeIcon icon={faRotate} />
                  </div>
                  <div className="attribute_title">
                    وضعیت <span>{anime.status}</span>
                  </div>
                </div>

                <div className="attribute">
                  <div className="attribute_icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="attribute_title">
                    زمان هر قسمت <span>{anime.duration}</span>
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
              <div className="anime_score_votes">({anime.scored_by}) نفر</div>

              <div className="anime_score_box">
                <span>10 /</span>
                <div>{anime.score}</div>
              </div>
            </div>

            <div className="anime_description">{anime.synopsis}</div>

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

            <div className="description">{anime.synopsis}</div>

            <div className="play_new_ep_btn">
              <div>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              تماشا کنید
            </div>
          </div>
        </div>

        <HomeTopics state={animes} title={"انیمه های مشابه"} showBtn={false} />
        <Comments />
      </div>
    );
  }
};

export default Anime;
