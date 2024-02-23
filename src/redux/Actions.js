import { CHANGE_THEME, CHANGE_AUTH_STATUS } from "./Types";

export const changeTheme = () => {
  return { type: CHANGE_THEME };
};

export const changeAuthStatus = () => {
  return { type: CHANGE_AUTH_STATUS };
};
