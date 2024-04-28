// assets
import "../styles/home-topics.css";
import "../styles/anime-box.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBookmark } from "@fortawesome/free-solid-svg-icons";

// tools
import { Link } from "react-router-dom";

const HomeTopics = ({ state, title, showBtn }) => {
  return (
    <div className="home_topics">
      <div className="section_title_box">
        <span>{title}</span>

        {showBtn ? (
          <div className="show_btn">
            مشاهده همه
            <div>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom_section">
        {state.map((anime) => (
          <div className="anime_box" key={anime.id}>
            <img src={anime.image} alt="anime-cover" />

            <div className="anime_info">
              <div className="titles">
                <div className="e_title">{anime.title_english}</div>
                <div className="p_title">{anime.title}</div>
              </div>

              <div className="anime_footer">
                <div className="anime_buttons">
                  <div>
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                </div>

                <div className="score">
                  <div>
                    <span>10</span>/
                  </div>
                  {anime.score}
                </div>
              </div>

              <Link
                to={`/anime/${anime.slug}`}
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
