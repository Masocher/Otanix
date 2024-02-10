// assets
import "../styles/anime-characters-slider.css";
import img1 from "../images/animes/1.jpg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AnimeCharactersSlider = () => {
  const state = [
    {
      id: 0,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 1,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 2,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 3,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 4,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 5,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 6,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 7,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 8,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 9,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 10,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
    {
      id: 11,
      cover: img1,
      characterName: "Roroana Zoro",
      voiceActor: "Kazuya Nakai",
    },
  ];

  return (
    <div className="anime_characters_wrapper">
      <div className="section_title_box">
        <span>کاراکتر ها</span>
      </div>

      <Swiper
        slidesPerView={7}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        navigation={false}
        pagination={false}
        scrollbar={false}
        className="anime_characters_slider"
        allowTouchMove={true}
        spaceBetween={30}
      >
        {state.map((char) => (
          <SwiperSlide className="character_box" key={char.id}>
            <img src={char.cover} alt="character-cover" />
            <div className="char_name">{char.characterName}</div>
            <div className="voice_actor">{char.voiceActor}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeCharactersSlider;
