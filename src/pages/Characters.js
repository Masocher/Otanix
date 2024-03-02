// assets
import "../styles/animes.css";
import "../styles/characters.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Characters = () => {
  const characters = [
    {
      id: 0,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 1,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 2,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 3,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 4,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 5,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 6,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 7,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 8,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 9,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 10,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 11,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 12,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
    {
      id: 13,
      name: "مانکی دی لوفی",
      voiceActor: "مایومی تاناکا",
      cover: img1,
    },
  ];

  return (
    <div className="characters_container">
      <div className="top_side">
        <form className="search_box" action="#">
          <input placeholder="جستجو در کاراکتر ها ..." />
          <div className="search_icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </form>

        <div className="filters_btn">
          <div>
            <FontAwesomeIcon icon={faChartColumn} />
          </div>
          فیلتر ها
        </div>
      </div>

      <div className="characters_wrapper">
        {characters.map((char) => (
          <div className="char_box" key={char.id}>
            <Link to={`/characters/${char.id}`}>
              <img src={char.cover} />
            </Link>
            
            <div className="char_name">{char.name}</div>
            <div className="voice_actor">{char.voiceActor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
