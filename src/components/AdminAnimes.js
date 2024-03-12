// assets
import "../styles/admin.css";

// redux
import { useSelector } from "react-redux";

const AdminAnimes = () => {
  const adminAnimes = useSelector(
    (rootReducer) => rootReducer.adminAnimesReducer
  );

  return (
    <div className="admin_animes">
      <div className="table_list">
        <div>اطلاعات</div>
        <div>امتیاز</div>
        <div>ویرایش</div>
      </div>

      {adminAnimes.map((anime) => (
        <div key={anime.id} className="anime_table">
          <div className="anime_table_inf">
            <img src={anime.cover} alt="anime-cover" />
            <span>
              {anime.title} <br />
              {anime.ptitle}
            </span>
          </div>

          <div className="anime_table_score">{anime.rate}</div>

          <div className="anime_table_buttons">
            <div className="at_btn">ویرایش</div>
            <div className="at_btn delete_btn">حذف</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminAnimes;
