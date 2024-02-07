// assets
import img1 from "../images/animes/1.jpg";

const HomeCategoryBoxes = () => {
  return (
    <div className="category_boxes">
      <div className="category_box">
        <img src={img1} alt="category-cover" />
        <div className="title_box">انیمه های اکشن</div>
      </div>

      <div className="category_box">
        <img src={img1} alt="category-cover" />
        <div className="title_box">انیمه های اکشن</div>
      </div>

      <div className="category_box">
        <img src={img1} alt="category-cover" />
        <div className="title_box">انیمه های اکشن</div>
      </div>

      <div className="category_box">
        <img src={img1} alt="category-cover" />
        <div className="title_box">انیمه های اکشن</div>
      </div>
    </div>
  );
};

export default HomeCategoryBoxes;
