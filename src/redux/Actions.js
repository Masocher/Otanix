import {
  CHANGE_THEME,
  CHANGE_POP_UP_STATUS,
  OPEN_ANIMES_FILTERS,
  OPEN_CHARACTERS_FILTERS,
  SIGN_IN,
  ON_START,
} from "./Types";

export const changeTheme = () => {
  return { type: CHANGE_THEME };
};

export const changePopUpStatus = () => {
  return { type: CHANGE_POP_UP_STATUS };
};

export const openAnimesFilters = () => {
  return { type: OPEN_ANIMES_FILTERS };
};

export const openCharactersFilters = () => {
  return { type: OPEN_CHARACTERS_FILTERS };
};

// authenticating
export const signIn = (username, password) => {
  return { type: SIGN_IN, payload: { username: username, password: password } };
};

export const onStart = () => {
  return { type: ON_START };
};
