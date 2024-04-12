import {
  CHANGE_THEME,
  CHANGE_POP_UP_STATUS,
  OPEN_ANIMES_FILTERS,
  OPEN_CHARACTERS_FILTERS,
  SIGN_UP,
  SIGN_IN,
  ON_START,
  LOG_OUT,
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
export const signUp = (username, email, password) => {
  return {
    type: SIGN_UP,
    payload: {
      username: username,
      email: email,
      password: password,
    },
  };
};

export const signIn = (username, password) => {
  return { type: SIGN_IN, payload: { username: username, password: password } };
};

export const onStart = () => {
  return { type: ON_START };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
