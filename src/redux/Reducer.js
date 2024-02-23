// tools
import { combineReducers } from "redux";

// types
import { CHANGE_THEME, CHANGE_AUTH_STATUS } from "./Types";

const themeStatus = false;

const themeReducer = (state = themeStatus, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return (state = !state);

    default:
      return state;
  }
};

const authStatus = true;

const authStatusReducer = (state = authStatus, action) => {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return (state = true);

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  themeReducer,
  authStatusReducer,
});
