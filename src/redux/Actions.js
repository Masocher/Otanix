import {
  CHANGE_THEME,
  CHANGE_AUTH_STATUS,
  CHANGE_POP_UP_STATUS,
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
