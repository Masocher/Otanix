// tools
import { combineReducers } from "redux";

// types
import {
  CHANGE_THEME,
  CHANGE_AUTH_STATUS,
  CHANGE_POP_UP_STATUS,
  OPEN_ANIMES_FILTERS,
  OPEN_CHARACTERS_FILTERS,
  SIGN_IN,
} from "./Types";

import img1 from "../images/animes/1.jpg";

import axios from "axios";

// otanix tool
const themeStatus = false;

const themeReducer = (state = themeStatus, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return (state = !state);

    default:
      return state;
  }
};

const authStatus = false;

const authStatusReducer = (state = authStatus, action) => {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return (state = true);

    default:
      return state;
  }
};

const popUpStatus = false;

const popUpReducer = (state = popUpStatus, action) => {
  switch (action.type) {
    case CHANGE_POP_UP_STATUS:
      return (state = !state);

    default:
      return state;
  }
};

const animesFilters = false;

const animesFiltersReducer = (state = animesFilters, action) => {
  switch (action.type) {
    case OPEN_ANIMES_FILTERS:
      return (state = !state);

    default:
      return state;
  }
};

const charactersFilters = false;

const charactersFiltersReducer = (state = charactersFilters, action) => {
  switch (action.type) {
    case OPEN_CHARACTERS_FILTERS:
      return (state = !state);

    default:
      return state;
  }
};

// otanix data
const adminAnimes = [
  {
    id: 0,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 1,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 2,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 3,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 4,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 5,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 6,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 7,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 8,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 9,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 10,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
  {
    id: 11,
    title: "One Piece",
    ptitle: "وان پیس",
    rate: "۷.۱۸",
    tags: [
      { id: 0, title: "اکشن" },
      { id: 1, title: "علمی تخیلی" },
      { id: 2, title: "اکشن" },
      { id: 3, title: "علمی تخیلی" },
    ],
    about:
      "داستان درباره جهانی است که به دو گروه انسان‌ها و موجوداتی به نام کاتاوارا تقسیم شده‌اند. تاما که خود یک کاتاواراست بسیار عاشق انسان‌هاست و حتی اگر باید با هم‌نوعان خود بجنگد، آماده است تا آنها را از شر بدی نجات دهد. برادر تاما به نام جینکا اما انسان‌ها را دوست ندارد، نیھل که بیشتر خودش انسان است. این دو برادر به همراه شمشیرزنی بزدل به نام شینسوکه که می‌خواهد قدرتمند شود...",
    cover: img1,
    country: "ژاپن",
    votes: "425",
  },
];

const adminAnimesReducer = (state = adminAnimes) => {
  return state;
};

const characters = [
  {
    id: 0,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 1,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 2,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 3,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 4,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 5,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 6,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 7,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 8,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 9,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 10,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 11,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 12,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
  {
    id: 13,
    name: "مانکی دی لوفی",
    voiceActor: "مایومی تاناکا",
    cover: img1,
  },
];

const charactersReducer = (state = characters) => {
  return state;
};

const discussions = [
  {
    id: 0,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 1,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 2,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 3,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 4,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 5,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 6,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 7,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 8,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
  {
    id: 9,
    title: "آخرین قسمت وان پیس !",
    category: "وان پیس",
  },
];

const discussionsReducer = (state = discussions) => {
  return state;
};

// authenticating
const userToken = null;

const isAuthenticated = null;

const keepUser = (token) => {
  axios.defaults.headers.common["Authorization"] = "Token " + token;
  token = userToken;
  localStorage.setItem("token", token);
};

const signInReducer = (state = isAuthenticated, action) => {
  switch (action.type) {
    case SIGN_IN:
      axios.defaults.headers.common["Authorization"] = "";
      axios
        .post("https://otanix-api.liara.run/api/auth/token/", {
          username: action.payload.username,
          password: action.payload.password,
        })
        .then((response) => {
          keepUser(response.data.auth_token);
          state = true;
        })
        .catch((error) => console.log(error.response));
      return state;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  themeReducer,
  authStatusReducer,
  popUpReducer,
  adminAnimesReducer,
  charactersReducer,
  discussionsReducer,
  animesFiltersReducer,
  charactersFiltersReducer,
  signInReducer,
});
