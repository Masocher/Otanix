// components
import HomeSlider from "../components/HomeSlider";
import HomeArticles from "../components/HomeArticles";
import HomeCategoryBoxes from "../components/HomeCategoryBoxes";
import HomeTopics from "../components/HomeTopics";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeCategoryBoxes />
      <HomeArticles />
      <HomeTopics />
    </div>
  );
};

export default Home;
