// assets
import "../styles/home-weekly-schedule.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const HomeWeeklySchedule = () => {
  return (
    <div className="weekly_schedule">
      <div className="top_side">
        <div className="title_box">
          <div>
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          جدول پخش هفتگی
        </div>

        <div className="week_days">
          <div>شنبه</div>
          <div>یکشنبه</div>
          <div className="show">دوشنبه</div>
          <div>سه شنبه</div>
          <div>چهارشنبه</div>
          <div>پنجشنبه</div>
          <div>جمعه</div>
        </div>
      </div>

      <div className="bottom_side">
        <div className="schedule_notif_box">
          <img src={img1} alt="anime-cover" />

          <div className="notif_box_inf">
            <div className="anime_name">One Piece</div>
            <div className="description">قسمت 1000 از فصل 1000 اضافه شد</div>
          </div>
        </div>

        <div className="schedule_notif_box">
          <img src={img1} alt="anime-cover" />

          <div className="notif_box_inf">
            <div className="anime_name">One Piece</div>
            <div className="description">قسمت 1000 اضافه شد</div>
          </div>
        </div>

        <div className="schedule_notif_box">
          <img src={img1} alt="anime-cover" />

          <div className="notif_box_inf">
            <div className="anime_name">One Piece</div>
            <div className="description">قسمت 1000 اضافه شد</div>
          </div>
        </div>

        <div className="schedule_notif_box">
          <img src={img1} alt="anime-cover" />

          <div className="notif_box_inf">
            <div className="anime_name">One Piece</div>
            <div className="description">قسمت 1000 اضافه شد</div>
          </div>
        </div>

        <div className="schedule_notif_box">
          <img src={img1} alt="anime-cover" />

          <div className="notif_box_inf">
            <div className="anime_name">One Piece</div>
            <div className="description">قسمت 1000 اضافه شد</div>
          </div>
        </div>

        <div className="schedule_notif_box">
          <img src={img1} alt="anime-cover" />

          <div className="notif_box_inf">
            <div className="anime_name">One Piece</div>
            <div className="description">قسمت 1000 اضافه شد</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWeeklySchedule;
