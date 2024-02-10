// assets
import img1 from "../images/animes/1.jpg"

// components
import HomeSlider from "../components/HomeSlider";
import HomeArticles from "../components/HomeArticles";
import HomeCategoryBoxes from "../components/HomeCategoryBoxes";
import HomeTopics from "../components/HomeTopics";
import HomeDiscussions from "../components/HomeDiscussions";
import HomeWeeklySchedule from "../components/HomeWeeklySchedule";

const Home = () => {
  const state = [
    {
      id: 0,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      cover: img1,
    },
    {
      id: 1,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      cover: img1,
    },
    {
      id: 2,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      cover: img1,
    },
    {
      id: 3,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      cover: img1,
    },
    {
      id: 4,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      cover: img1,
    },
    {
      id: 5,
      title: "One Piece",
      ptitle: "وان پیس",
      rate: "۷.۱۸",
      cover: img1,
    },
  ];

  return (
    <div>
      <HomeSlider />
      <HomeCategoryBoxes />
      <HomeArticles />
      <HomeTopics state={state} title={"انیمه های برتر"} showBtn={true} />
      <HomeDiscussions />
      <HomeTopics state={state} title={"انیمه های برتر فصل"} showBtn={true} />
      <HomeWeeklySchedule />
    </div>
  );
};

export default Home;
