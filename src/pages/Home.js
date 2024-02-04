// components
import HomeSlider from "../components/HomeSlider";
import HomeArticles from "../components/HomeArticles";
import HomeCategoryBoxes from "../components/HomeCategoryBoxes";
import HomeTopics from "../components/HomeTopics";
import HomeDiscussions from "../components/HomeDiscussions";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeCategoryBoxes />
      <HomeArticles />
      <HomeTopics />
      <HomeDiscussions />
    </div>
  );
};

export default Home;
