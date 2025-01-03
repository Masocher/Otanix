// assets
import "../styles/animes.css";
import "../styles/anime-box.css";

// tools
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faChartColumn,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// components
import AnimesFilters from "../components/AnimesFilters";

// redux
import { useDispatch } from "react-redux";
import { openAnimesFilters } from "../redux/Actions";
import axios from "axios";
import Loading from "../components/Loading";

const Animes = () => {
  const dispatch = useDispatch();

  let [animes, setAnimes] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("starting getting animes information");
    axios
      .get("https://otanix-api.liara.run/api/anime/")
      .then((response) => setAnimes(response.data))
      .catch((error) => console.log(error));
    console.log("ending the get request");
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="animes_container">
        <div className="top_side">
          <form className="search_box" action="#">
            <input placeholder="جستجو در انیمه ها ..." />
            <div className="search_icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </form>

          <div
            className="filters_btn"
            onClick={() => dispatch(openAnimesFilters())}
          >
            <div>
              <FontAwesomeIcon icon={faChartColumn} />
            </div>
            فیلتر ها
          </div>
        </div>

        <AnimesFilters />

        <div className="bottom_side">
          {animes.map((anime) => (
            <div className="anime_box animes_anime_box" key={anime.id}>
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
  }
};

export default Animes;
