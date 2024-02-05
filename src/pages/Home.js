// components
import HomeSlider from "../components/HomeSlider";
import HomeArticles from "../components/HomeArticles";
import HomeCategoryBoxes from "../components/HomeCategoryBoxes";
import HomeTopics from "../components/HomeTopics";
import HomeDiscussions from "../components/HomeDiscussions";
import HomeSeasonTopics from "../components/HomeSeasonTopics";
import HomeWeeklySchedule from "../components/HomeWeeklySchedule";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeCategoryBoxes />
      <HomeArticles />
      <HomeTopics />
      <HomeDiscussions />
      <HomeSeasonTopics />
      <HomeWeeklySchedule />
    </div>
  );
};

export default Home;
