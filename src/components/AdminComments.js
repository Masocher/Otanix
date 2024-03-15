// assets
import "../styles/admin.css";
import img1 from "../images/animes/1.jpg";

// redux
import { useSelector } from "react-redux";

const AdminComments = () => {
  const adminDiscussions = useSelector(
    (rootReducer) => rootReducer.discussionsReducer
  );

  return (
    <div className="admin_comments">
      <div className="table_list">
        <div>اطلاعات</div>
        <div>ویرایش</div>
      </div>

      {adminDiscussions.map((comment) => (
        <div key={comment.id} className="anime_table">
          <div className="comment_anime_table_inf">
            <img src={img1} alt="user-cover" />
            <span>{comment.title}</span>
          </div>

          <div className="anime_table_buttons">
            <div className="at_btn delete_btn">حذف</div>
            <div className="at_btn show_btn">نمایش</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminComments;
