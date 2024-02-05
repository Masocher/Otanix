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

const HomeTopics = () => {
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
        <div className="anime_box">
          <img src={img1} />

          <div className="anime_info">
            <div className="titles">
              <div className="e_title">One Piece</div>
              <div className="p_title">انیمه وان پیس</div>
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
                ۷.۱۸
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>

            <div className="show_anime">مشاهده جزئیات</div>
          </div>
        </div>
        <div className="anime_box">
          <img src={img1} />

          <div className="anime_info">
            <div className="titles">
              <div className="e_title">One Piece</div>
              <div className="p_title">انیمه وان پیس</div>
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
                ۷.۱۸
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>

            <div className="show_anime">مشاهده جزئیات</div>
          </div>
        </div>
        <div className="anime_box">
          <img src={img1} />

          <div className="anime_info">
            <div className="titles">
              <div className="e_title">One Piece</div>
              <div className="p_title">انیمه وان پیس</div>
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
                ۷.۱۸
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>

            <div className="show_anime">مشاهده جزئیات</div>
          </div>
        </div>
        <div className="anime_box">
          <img src={img1} />

          <div className="anime_info">
            <div className="titles">
              <div className="e_title">One Piece</div>
              <div className="p_title">انیمه وان پیس</div>
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
                ۷.۱۸
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>

            <div className="show_anime">مشاهده جزئیات</div>
          </div>
        </div>
        <div className="anime_box">
          <img src={img1} />

          <div className="anime_info">
            <div className="titles">
              <div className="e_title">One Piece</div>
              <div className="p_title">انیمه وان پیس</div>
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
                ۷.۱۸
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>

            <div className="show_anime">مشاهده جزئیات</div>
          </div>
        </div>
        <div className="anime_box">
          <img src={img1} />

          <div className="anime_info">
            <div className="titles">
              <div className="e_title">One Piece</div>
              <div className="p_title">انیمه وان پیس</div>
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
                ۷.۱۸
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>

            <div className="show_anime">مشاهده جزئیات</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopics;
