import {
  CHANGE_THEME,
  CHANGE_AUTH_STATUS,
  CHANGE_POP_UP_STATUS,
  OPEN_ANIMES_FILTERS,
} from "./Types";

export const changeTheme = () => {
  return { type: CHANGE_THEME };
};

export const changeAuthStatus = () => {
  return { type: CHANGE_AUTH_STATUS };
};

export const changePopUpStatus = () => {
  return { type: CHANGE_POP_UP_STATUS };
};

export const openAnimesFilters = () => {
  return { type: OPEN_ANIMES_FILTERS };
};
