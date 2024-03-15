// assets
import "../styles/admin.css";
import img1 from "../images/animes/1.jpg";

// redux
import { useSelector } from "react-redux";

const AdminDiscussions = () => {
  const adminDiscussions = useSelector(
    (rootReducer) => rootReducer.discussionsReducer
  );

  return (
    <div className="admin_discussions">
      <div className="table_list">
        <div>اطلاعات</div>
        <div>دسته بندی</div>
        <div>ویرایش</div>
      </div>

      {adminDiscussions.map((discussion) => (
        <div key={discussion.id} className="anime_table">
          <div className="discussion_anime_table_inf">
            <img src={img1} alt="anime-cover" />
            <span>{discussion.title}</span>
          </div>

          <div className="anime_table_voice_actor">{discussion.category}</div>

          <div className="anime_table_buttons">
            <div className="at_btn">ویرایش</div>
            <div className="at_btn show_btn">نمایش</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDiscussions;
