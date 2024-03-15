// assets
import "../styles/admin.css";

// redux
import { useSelector } from "react-redux";

const AdminCharacters = () => {
  const adminCharacters = useSelector(
    (rootReducer) => rootReducer.charactersReducer
  );

  return (
    <div className="admin_characters">
      <div className="table_list">
        <div>اطلاعات</div>
        <div>گوینده</div>
        <div>ویرایش</div>
      </div>

      {adminCharacters.map((char) => (
        <div key={char.id} className="anime_table">
          <div className="anime_table_inf">
            <img src={char.cover} alt="anime-cover" />
            <span>{char.name}</span>
          </div>

          <div className="anime_table_voice_actor">{char.voiceActor}</div>

          <div className="anime_table_buttons">
            <div className="at_btn">ویرایش</div>
            <div className="at_btn show_btn">نمایش</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCharacters;
