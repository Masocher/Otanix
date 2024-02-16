// assets
import "../styles/discussions.css";
import img1 from "../images/animes/1.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faReply,
  faMagnifyingGlass,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const Discussions = () => {
  const discussions = [
    {
      id: 0,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 1,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 2,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 3,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 4,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 5,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 6,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 7,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 8,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
    {
      id: 9,
      title: "آخرین قسمت وان پیس !",
      about:
        "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود",
      category: "وان پیس",
    },
  ];

  return (
    <div className="discussions_container">
      <div className="right_side">
        <div className="search_wrapper">
          <form className="search_box" action="#">
            <input placeholder="جستجو در گفتگو ها ..." />

            <div className="search_icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </form>

          <div className="create_discussions">
            <div>
              <FontAwesomeIcon icon={faPlusCircle} />
            </div>
            ایجاد گفتگوی جدید
          </div>
        </div>

        <div className="discussions_list">
          {discussions.map((discussion) => (
            <div className="discussion_box" key={discussion.id}>
              <div className="writer_box">
                <img src={img1} />

                <div className="witer_about">
                  <span>
                    <div className="writer_name">Masocher</div>
                    <div className="udate_date">1 سال پیش مطرح شد</div>
                  </span>

                  <div className="replies_box">
                    <div>
                      <FontAwesomeIcon icon={faReply} />
                    </div>
                    5 پاسخ
                  </div>
                </div>
              </div>

              <div className="title_box">{discussion.title}</div>

              <div className="description">{discussion.about}</div>

              <div className="category">
                <div>
                  <FontAwesomeIcon icon={faFolderOpen} />
                </div>
                {discussion.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="left_side">
        <div className="hot_discussions">
          <div className="section_title_box">
            <span>گفتگو های داغ</span>
          </div>

          <div className="hot_discussion">
            <div className="gold_column"></div>

            <div className="title_box">آخرین قسمت وان پیس !</div>

            <div className="category">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} />
              </div>
              وان پیس
            </div>
          </div>

          <div className="hot_discussion">
            <div className="gold_column"></div>

            <div className="title_box">آخرین قسمت وان پیس !</div>

            <div className="category">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} />
              </div>
              وان پیس
            </div>
          </div>

          <div className="hot_discussion">
            <div className="gold_column"></div>

            <div className="title_box">آخرین قسمت وان پیس !</div>

            <div className="category">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} />
              </div>
              وان پیس
            </div>
          </div>

          <div className="hot_discussion">
            <div className="gold_column"></div>

            <div className="title_box">آخرین قسمت وان پیس !</div>

            <div className="category">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} />
              </div>
              وان پیس
            </div>
          </div>

          <div className="hot_discussion">
            <div className="gold_column"></div>

            <div className="title_box">آخرین قسمت وان پیس !</div>

            <div className="category">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} />
              </div>
              وان پیس
            </div>
          </div>
        </div>

        <div className="active_users">
          <div className="section_title_box">
            <span>کاربران فعال</span>
          </div>

          <div className="user_box">
            <img src={img1} alt="user-profile" />
            <div className="user_name">Masocher</div>
            <div className="rank">
              <div>1</div>
              رتبه کاربر
            </div>
          </div>

          <div className="user_box">
            <img src={img1} alt="user-profile" />
            <div className="user_name">Masocher</div>
            <div className="rank">
              <div>2</div>
              رتبه کاربر
            </div>
          </div>

          <div className="user_box">
            <img src={img1} alt="user-profile" />
            <div className="user_name">Masocher</div>
            <div className="rank">
              <div>3</div>
              رتبه کاربر
            </div>
          </div>
        </div>

        <div className="popular_categories">
          <div className="section_title_box">
            <span>محبوب ترین دسته بندی ها</span>
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>

          <div className="category">
            <div>
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            وان پیس
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;