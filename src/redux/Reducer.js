// tools
import { combineReducers } from "redux";

// types
import { CHANGE_THEME } from "./Types";

const themeStatus = true;

const themeReducer = (state = themeStatus, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return (state = !state);

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  themeReducer,
});
