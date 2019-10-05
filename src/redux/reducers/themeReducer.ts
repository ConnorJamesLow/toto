import { createReducer } from "redux-starter-kit";
import { themes } from '../../styles/main';
import { setTheme } from "../actions";
const SET_THEME = setTheme.toString();

export default createReducer(themes.DARK_THEME, {
  [SET_THEME]: (state, action) => action.payload
});