import {
    CHANGE_LANG
} from 'Constants/actionTypes';

const INIT_STATE = { locate: localStorage.getItem("currentLanguage") };

export default (state = INIT_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case CHANGE_LANG:
		  return { ...state, locale: action.payload};
		default: return { ...state };
	}
}
