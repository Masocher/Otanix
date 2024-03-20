// assets
import "../styles/animes-filters.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { openAnimesFilters } from "../redux/Actions";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// tools
import { useState } from "react";

const AnimesFilters = () => {
  const dispatch = useDispatch();

  const animesFiltersStatus = useSelector(
    (rootReducer) => rootReducer.animesFiltersReducer
  );

  const [genre, setGenre] = useState(false);
  const [age, setAge] = useState(false);
  const [score, setScore] = useState(false);

  return (
    <div className={`filters_container ${animesFiltersStatus ? "show" : ""}`}>
      <div className="filters">
        <div className="f_btn">
          <div
            className="title"
            onClick={() => {
              setGenre(!genre);
              setAge(false);
              setScore(false);
            }}
          >
            ژانر ها
            <span>
              <FontAwesomeIcon icon={genre ? faAngleDown : faAngleLeft} />
            </span>
          </div>

          <div className={`filters_buttons ${genre ? "show" : ""}`}>
            <div onClick={() => setGenre(false)}>همه</div>
            <div onClick={() => setGenre(false)}>اکشن</div>
            <div onClick={() => setGenre(false)}>ترسناک</div>
            <div onClick={() => setGenre(false)}>ماورا الطبیعه</div>
          </div>
        </div>

        <div className="f_btn">
          <div
            className="title"
            onClick={() => {
              setGenre(false);
              setAge(!age);
              setScore(false);
            }}
          >
            رده سنی
            <span>
              <FontAwesomeIcon icon={age ? faAngleDown : faAngleLeft} />
            </span>
          </div>

          <div
            className={`filters_buttons filters_buttons_2 ${age ? "show" : ""}`}
          >
            <div onClick={() => setAge(false)}>همه</div>
            <div onClick={() => setAge(false)}>بالای 3 سال</div>
            <div onClick={() => setAge(false)}>بالای 13 سال</div>
            <div onClick={() => setAge(false)}>بالای 17 سال ( خشونت )</div>
          </div>
        </div>

        <div className="f_btn">
          <div
            className="title"
            onClick={() => {
              setGenre(false);
              setAge(false);
              setScore(!score);
            }}
          >
            امتیاز
            <span>
              <FontAwesomeIcon icon={score ? faAngleDown : faAngleLeft} />
            </span>
          </div>

          <div className={`filters_buttons ${score ? "show" : ""}`}>
            <div onClick={() => setScore(false)}>همه</div>
            <div onClick={() => setScore(false)}>1 از 10</div>
            <div onClick={() => setScore(false)}>2 از 10</div>
            <div onClick={() => setScore(false)}>3 از 10</div>
            <div onClick={() => setScore(false)}>4 از 10</div>
            <div onClick={() => setScore(false)}>5 از 10</div>
            <div onClick={() => setScore(false)}>6 از 10</div>
            <div onClick={() => setScore(false)}>7 از 10</div>
            <div onClick={() => setScore(false)}>8 از 10</div>
            <div onClick={() => setScore(false)}>9 از 10</div>
            <div onClick={() => setScore(false)}>10 از 10</div>
          </div>
        </div>

        <div
          className="submit_filters"
          onClick={() => {
            dispatch(openAnimesFilters());
            setGenre(false);
            setAge(false);
            setScore(false);
          }}
        >
          اعمال فیلتر ها
        </div>
      </div>
    </div>
  );
};

export default AnimesFilters;
