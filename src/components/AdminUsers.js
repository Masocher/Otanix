// assets
import "../styles/admin.css"
import img1 from "../images/animes/1.jpg";

// redux
import { useSelector } from "react-redux";

const AdminUsers = () => {
  const adminDiscussions = useSelector(
    (rootReducer) => rootReducer.discussionsReducer
  );

  return (
    <div className="admin_users">
      <div className="table_list">
        <div>اطلاعات</div>
        <div>ویرایش</div>
      </div>

      {adminDiscussions.map((user) => (
        <div key={user.id} className="anime_table">
          <div className="comment_anime_table_inf">
            <img src={img1} alt="user-cover" />
            <span>{user.title}</span>
          </div>

          <div className="anime_table_buttons">
            <div className="at_btn delete_btn">حذف</div>
            <div className="at_btn profile_btn">پروفایل</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
